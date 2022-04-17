########################################################################################################
################################## 2021 ANNUAL REPORT MAIN SCRIPT ######################################

# Reset environment
rm(list = ls())
#setwd("/path/to")
readRenviron(".Renviron")
print(paste("Working directory set to:", getwd()))

########################################################################################################
######################################## GLOBAL VARIABLES ##############################################
#setwd("/home/pili/code/oipm/annual-report-2018/")

# The current year to analyze
IAPRO.FIRST.YEAR <- 2016
CURRENT.YEAR <- 2021
PLOTLY.OUTPUT.PATH <- "../web/src/data/"

# Will force all the graphs to recompute
REGEN_ANALYSIS <- TRUE

CSV_SEP <- ","

########################################################################################################
######################################## LOAD DEPENDENCIES #############################################
# Load libraries
library(dplyr)
library(plotly)
# library(tidyr)
#library(geojsonio)
#library(maptools)
#library(leaflet)

# Local helpers
source("lib/utils.R")

########################################################################################################
############################################ DATA ######################################################
######### Use of Force
DATA_DIR <- Sys.getenv("DATA_DIR")
UOF.CSV.DIRTY <- paste0(DATA_DIR, "/uof_20220417.csv")

########################################################################################################
############################################# LOAD DATA ################################################

uof.all <- read.csv(UOF.CSV.DIRTY, stringsAsFactors = FALSE, sep = CSV_SEP)

########################################################################################################
########################################## PREPARE DATA ################################################
uof.all <- uof.all %>% mutate(
  year.of.record = substr(FIT.Number, 4, 7)
)

########################################################################################################
########################################## PERFORM ANALYSIS ############################################

if (REGEN_ANALYSIS) {
  print("Going to run all analysis")
  load.subdirectory("force")
}

