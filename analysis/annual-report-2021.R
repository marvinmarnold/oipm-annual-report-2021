###############################################################################
###################### 2021 ANNUAL REPORT MAIN SCRIPT #########################

# Reset environment
rm(list = ls())
# setwd("/path/to/oipm/oipm-annual-report-2021/analysis")
readRenviron(".Renviron")
print(paste("Working directory set to:", getwd()))

###############################################################################
###################### GLOBAL VARIABLES #######################################
#setwd("/home/pili/code/oipm/annual-report-2018/")

# The current year to analyze
IAPRO.FIRST.YEAR <- 2016
CURRENT.YEAR <- 2021
PLOTLY.OUTPUT.PATH <- "../web/src/data/"

# Will force all the graphs to recompute
REGEN_ANALYSIS <- TRUE

CSV_SEP <- ","

###############################################################################
###################### LOAD DEPENDENCIES ######################################
# Load libraries
library(dplyr)
library(plotly)
# library(tidyr)
#library(geojsonio)
#library(maptools)
#library(leaflet)

# Local helpers
source("lib/utils.R")

###############################################################################
###################### DATA ###################################################
## Private data
DATA_DIR <- Sys.getenv("DATA_DIR")

# IAPro - use of force and complaints
IAPRO_DIR <- paste0(DATA_DIR, "/00_Original/20220424_MarvinVPN/data")
UOF.CSV.DIRTY <- paste0(IAPRO_DIR, "/uof_20220424.csv")
ALLEGATIONS.CSV.DIRTY <- paste0(IAPRO_DIR, "/allegations_20220424.csv")
ACTIONSTAKEN.CSV.DIRTY <- paste0(IAPRO_DIR, "/actionstaken_20220424.csv")

# OPCD
# OPCD_DIR <- paste0(DATA_DIR, "/01_Raw/OPCD")

# OPSO
# AS400 - Bookings
BOOKINGS.CSV.DIRTY <- paste0(DATA_DIR, "/01_Raw/OPSO/20220208Simmons/bookings_2015_2021.CSV")

## Public data
PUBLIC_DIR <- "public_data"

# Stops
STOPS.CSV.PUBLIC <- paste0(PUBLIC_DIR, "/stops_20220503.csv")
###############################################################################
###################### LOAD DATA ##############################################

uof.all <- read.csv(UOF.CSV.DIRTY, stringsAsFactors = FALSE, sep = CSV_SEP)
allegations.all <- read.csv(ALLEGATIONS.CSV.DIRTY, stringsAsFactors = FALSE, sep = CSV_SEP)
actions.taken.all <- read.csv(ACTIONSTAKEN.CSV.DIRTY, stringsAsFactors = FALSE, sep = CSV_SEP)

stops.all <- read.csv(STOPS.CSV.PUBLIC, stringsAsFactors = FALSE, sep = CSV_SEP)
bookings.all <- read.csv(BOOKINGS.CSV.DIRTY, stringsAsFactors = FALSE, sep = CSV_SEP)
###############################################################################
###################### PREPARE DATA ###########################################

uof.all <- uof.all %>% mutate(
  year.of.record = substr(FIT.Number, 4, 7),
  year = year.of.record
)
uof.for.year <- uof.all %>% filter(year.of.record == CURRENT.YEAR)

allegations.all <- allegations.all %>% 
  mutate(
    year.of.record = substr(PIB.Control.Number, 0, 4),
    Allegation.simple = Allegation.1,
    Allegation.finding.simple = case_when(
      grepl("NEGOTIATED SETTLEMENT", Allegation.finding) ~ "Negotiated Settlement",
      grepl("NULL", Allegation.finding) ~ "Data Inconsistency",
      grepl("CHARGES DISPROVEN", Allegation.finding) ~ "Data Inconsistency",
      grepl("DUPLICATE", Allegation.finding) ~ "Data Inconsistency",
      grepl("INFO", Allegation.finding) ~ "Data Inconsistency",
      grepl("ABANDONMENT", Allegation.finding) ~ "Data Inconsistency",
      grepl("CHARGES PROVEN RESIGNED", Allegation.finding) ~ "Data Inconsistency",
      grepl("NAT", Allegation.finding) ~ "Data Inconsistency",
      Allegation.finding == "CANCELLED" ~ "Data Inconsistency",
      Allegation.finding == "CHARGES WITHDRAWN" ~ "Data Inconsistency",
      Allegation.finding == "CHARGES PROVEN" ~ "Data Inconsistency",
      Allegation.finding == "WITHDRAWN" ~ "Data Inconsistency",
      Allegation.finding == "INVESTIGATION CANCELLED" ~ "Data Inconsistency",
      Allegation.finding == "NO VIOLATIONS OBSERVED" ~ "Data Inconsistency",
      Allegation.finding == "RECLASSIFIED AS DI-3" ~ "Data Inconsistency",
      Allegation.finding == "RECLASSIFIED AS INFO" ~ "Data Inconsistency",
      Allegation.finding == "DUI" ~ "Data Inconsistency",
      Allegation.finding == "DECEASED" ~ "Data Inconsistency",
      Allegation.finding == "Dismissal - Rule 9" ~ "Data Inconsistency",
      Allegation.finding == "DUI-Dismiss Under Invest" ~ "Data Inconsistency",
      Allegation.finding == "RETIRED UNDER INVEST." ~ "Data Inconsistency",
      Allegation.finding == "RUI-Resigned Under Inves" ~ "Data Inconsistency",
      Allegation.finding == "RUI-Retired Under Invest" ~ "Data Inconsistency",
      Allegation.finding == "See note" ~ "Data Inconsistency",
      Allegation.finding == "Resigned" ~ "Data Inconsistency",
      Allegation.finding == "DI-3" ~ "Data Inconsistency",
      Allegation.finding == "NFIM CASE" ~ "NFIM",
      Allegation.finding == "NFIM" ~ "NFIM",
      Allegation.finding == "DI-3 NFIM" ~ "NFIM",
      Allegation.finding == "NOT SUSTAINED" ~ "Not Sustained",
      Allegation.finding == "NOT SUSTAINED - RUI" ~ "Not Sustained",
      Allegation.finding == "RUI NOT SUSTAINED" ~ "Not Sustained",
      Allegation.finding == "DUI-NOT SUSTAINED" ~ "Not Sustained",
      Allegation.finding == "PENDING" ~ "Pending",
      Allegation.finding == "PENDING INVESTIGATION" ~ "Pending",
      Allegation.finding == "AWAITING HEARING" ~ "Pending",
      Allegation.finding == "SUSTAINED" ~ "Sustained",
      Allegation.finding == "RUI SUSTAINED" ~ "Sustained",
      Allegation.finding == "SUSTAINED - RUI" ~ "Sustained",
      Allegation.finding == "SUSTAINED - DUI" ~ "Sustained",
      Allegation.finding == "Sustained" ~ "Sustained",
      Allegation.finding == "DUI SUSTAINED" ~ "Sustained",
      Allegation.finding == "SUSTAINED - Deceased" ~ "Sustained",
      Allegation.finding == "SUSTAINED - RUI - RESIGN" ~ "Sustained",
      Allegation.finding == "SUSTAINED - RUI - RETIRE" ~ "Sustained",
      Allegation.finding == "Sustained - Dismissed" ~ "Sustained",
      Allegation.finding == "SUSTAINED-OVERTURNED" ~ "Sustained",
      Allegation.finding == "SUSTAINED - Prescribed" ~ "Sustained",
      Allegation.finding == "SUSTAINED" ~ "Sustained",
      Allegation.finding == "UNFOUNDED- DUI" ~ "Unfounded",
      Allegation.finding == "UNFOUNDED" ~ "Unfounded",
      Allegation.finding == "DI-2" ~ "Supervisory Feedback Log",
      Allegation.finding == "RECLASSIFIED AS DI-2" ~ "Supervisory Feedback Log",
      grepl("Unfounded", Allegation.finding, ignore.case = TRUE) ~ "Unfounded",
      grepl("Exonerated", Allegation.finding, ignore.case = TRUE) ~ "Exonerated",
      grepl("mediation", Allegation.finding, ignore.case = TRUE) ~ "Mediation",
      TRUE ~ "Data Inconsistency"
    )
  )

allegations.for.year <- allegations.all %>% filter(year.of.record == CURRENT.YEAR)
# Complaints need a single disposition

# Function to recategorize an array of dispositions/findings to a single disposition
SelectDisp <- function(disp) {
  if (any(disp == 'Sustained')) {
    return('Sustained')
  } else if (any(disp == 'Mediation')) {
    return('Mediation')
  } else if (any(disp == 'DI-2')) {
    return('DI-2')
  } else if (any(disp == 'Pending')) {
    return('Pending')
  } else if (any(disp == 'Not Sustained')) {
    return('Not Sustained')
  } else if (any(disp == 'Unfounded')) {
    return('Unfounded')
  } else if (any(disp == 'Exonerated')) {
    return('Exonerated')
  } else if (any(disp == 'NFIM')) {
    return('NFIM')
  } else {
    return('Data Inconsistency')
  } 
}

# Complaints with the same PIB.Control.Number shuold have the same disposition and assignment, so should be 
# effectively the same as getting allegations by unique PIB.Control.Number
complaints.by.officer.for.year <- allegations.for.year %>% 
  distinct(PIB.Control.Number, Officer.primary.key, .keep_all = TRUE)

complaints.for.year <- complaints.by.officer.for.year %>% 
  distinct(PIB.Control.Number, .keep_all = TRUE)

oipm.dispositions <- complaints.by.officer.for.year %>% 
  group_by(PIB.Control.Number) %>% 
  summarise_at(c("Disposition.OIPM.by.officer"), SelectDisp)

oipm.dispositions <- oipm.dispositions %>% mutate(
  Disposition.OIPM = Disposition.OIPM.by.officer
)

complaints.for.year <- merge(complaints.for.year, oipm.dispositions, by = "PIB.Control.Number")

actions.taken.all <- actions.taken.all %>%
  mutate(
    Allegation.simple = Allegation
  )
actions.taken.for.year <- actions.taken.all %>% filter(Action.taken.year == CURRENT.YEAR)

## Stops
stops.all <- stops.all %>%
    mutate(
        date = as.Date(EventDate, "%m/%d/20%y"),
        year = format(date, "%Y"),
        month = format(date, "%m")
    )

stops.for.year <- stops.all %>% filter(year == CURRENT.YEAR)

## Bookings
bookings.all <- bookings.all %>%
    mutate(
        date = as.Date(Check.In.Date, "20%y/%m/%d"),
        year = format(date, "%Y"),
        month.in = format(date, "%m")
    )

bookings.for.year <- bookings.all %>% filter(year == CURRENT.YEAR)
###############################################################################
###################### PERFORM ANALYSIS #######################################

if (REGEN_ANALYSIS) {
  print("Going to run all analysis")
  load.subdirectory("force")
}

allegations.all %>% select(Allegation.finding) %>% distinct()
