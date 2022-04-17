################################################################################
################################################################################
## Utilities

check.var <- function(var.name) {
  if (!exists(var.name)) {
    stop(paste("Variable name", var.name, "must be set."))
  }
}

check.vars <- function(var.names) {
  print.result.to.null.output <- lapply(var.names, check.var)
}

# Hash values to obfuscate underlying IDs
library(digest)
vdigest <- Vectorize(digest)

load.subdirectory <- function(subdir) {
  file.sources <- list.files(path = paste0(subdir), pattern="*.R$", recursive = TRUE, full.name = TRUE)
  lapply(file.sources, function(source.file) {
    print(paste("Loading file:", source.file))
    source(source.file)
  })
}

trim <- function (x) gsub("^\\s+|\\s+$", "", x)

################################################################################
################################################################################
## Plotly

# Helper function to write Plotly JSON
gen.plotly.json <- function(p, name) {
  p.json <- plotly::plotly_json(config(p), FALSE)  
  write(p.json, paste0(PLOTLY.OUTPUT.PATH, name, ".json"))
}

months.abbr <- c("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")

################################################################################
################################################################################
## Demographics

age.bucket.function <- function(age) {
  if (is.na(age) || is.null(age)) {
    'Unknown age'
  } else  if (age < 26) {
    '25 or younger'
  } else if (age >= 26 & age < 31) {
    '26 - 30'
  } else if (age >= 31 & age < 36) {
    '31 - 35'
  } else if (age >= 36 & age < 41) {
    '36 - 40'
  } else if (age >= 41 & age < 46) {
    '41 - 45'
  } else if (age >= 46 & age < 50) {
    '46 - 50'
  } else {
    '51 or older'
  }
}

exp.bucket.function <- function(exp) {
  if (is.na(exp) || is.null(exp) || exp == 'NULL') {
    'Unknown experience'
  } else  if (as.integer(exp) < 6) {
    '00 - 5 yr exp'
  } else if ((as.integer(exp) >= 6) & (as.integer(exp) < 11)) {
    '06 - 10 yr exp'
  } else if (as.integer(exp) >= 11 & as.integer(exp) < 16) {
    '11 - 15 yr exp'
  } else {
    '16+ yr exp'
  }
}

