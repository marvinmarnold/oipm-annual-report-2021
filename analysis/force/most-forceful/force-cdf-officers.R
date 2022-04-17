check.vars(c("uof.for.year"))

########################################################################################################
########################################################################################################

bucket.rank <- function(rank) {
  if (rank <= 5) {
    return(5)
  } else if (rank <= 10) {
    return(10)
  } else if (rank <= 20) {
    return(20)
  } else if (rank <= 100) {
    return(100)
  } else if (rank <= 200) {
    return(200)
  } else if (rank <= 300) {
    return(300)
  } else if (rank <= 400) {
    return(400)
  } else {
    return(500)
  }
}

# Manually construct histogram
bucket.hist <- function(dt, rank.buckets, counts) {
  hist.count <- sapply(rank.buckets, function(bucket) {
    return(sum(dt %>% filter(rank.bucket <= bucket) %>% select(count)))
  })
  
  return(hist.count)
}

# UOF Analysis
uof.per.officer <- uof.for.year %>% group_by(Officer.primary.key)
uof.count.per.officer <- uof.per.officer %>% summarise(count = n())
uof.count.per.officer <- uof.count.per.officer %>% mutate(
  rank = rank(-count, ties.method ="first"),
  rank.bucket = sapply(rank, bucket.rank)
) %>% arrange(rank)

uof.per.bucket <- uof.count.per.officer %>% group_by(rank.bucket)
uof.count.per.bucket <- uof.per.bucket %>% summarise(count = sum(count))
uof.count.per.bucket <- uof.count.per.bucket %>% mutate(
  hist.count = bucket.hist(uof.count.per.bucket, rank.bucket, count),
  hist.pct = hist.count / sum(count) * 100,
  rank.bucket = as.character(rank.bucket)
)

# FTN Analysis
# This is a little fudged. Not using the count of FTN, instead using the count of unique <FTN, Officer>
ftn.per.officer <- uof.for.year %>% select(FIT.Number, Officer.primary.key) %>% distinct %>% group_by(Officer.primary.key)
ftn.count.per.officer <- ftn.per.officer %>% summarise(count = n())
ftn.count.per.officer <- ftn.count.per.officer %>% mutate(
  rank = rank(-count, ties.method ="first"),
  rank.bucket = sapply(rank, bucket.rank)
) %>% arrange(rank)

ftn.per.bucket <- ftn.count.per.officer %>% group_by(rank.bucket)
ftn.count.per.bucket <- ftn.per.bucket %>% summarise(count = sum(count))
ftn.count.per.bucket <- ftn.count.per.bucket %>% mutate(
  hist.count = bucket.hist(ftn.count.per.bucket, rank.bucket, count),
  hist.pct = hist.count / sum(count) * 100,
  rank.bucket = as.character(rank.bucket)
)

force.count.per.bucket <- data.frame(
  rank.buckets = c("5", "10", "20", "100", "200", "300", "400", "500"),
  uof.pct.per.bucket = uof.count.per.bucket$hist.pct,
  ftn.pct.per.bucket = ftn.count.per.bucket$hist.pct
)

p.force.per.bucket <- plot_ly(force.count.per.bucket, 
                              x = ~rank.buckets, 
                              y = ~ftn.pct.per.bucket, type = 'bar', 
                              name = "Force incidents") %>%
  
  add_trace(y = ~uof.pct.per.bucket, name = "Amount of force (UOF)") %>%
  
  layout(
    xaxis = list(
      categoryorder = "array",
      categoryarray = c("5", "10", "20", "100", "200", "300", "400", "500"),
      title = "Total number of officers"
    ),
    yaxis = list(title = 'Percent of force', dtick = 10), 
    legend = list(x = 0, y = -.3),
    barmode = 'group')

p.force.per.bucket
gen.plotly.json(p.force.per.bucket, "force-cdf-officers")
