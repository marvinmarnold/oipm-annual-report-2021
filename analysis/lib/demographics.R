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

