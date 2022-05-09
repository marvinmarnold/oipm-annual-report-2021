check.vars(c("CURRENT.YEAR", "uof.all"))
title <- "FTN by year"

# Analyze years 2016 - 2018
first.year <- 2016
years <- first.year:CURRENT.YEAR

# Count total FTN by year. Replace 0 with NA 
ftn.by.year <- uof.all %>% distinct(FIT.Number, .keep_all = TRUE) %>% group_by(year.of.record)
count.ftn.by.year <- ftn.by.year %>% summarise(num = n())
count.ftn.by.year <- merge(
  data.frame(year = years), 
  count.ftn.by.year, 
  by.x = "year", 
  by.y = "year.of.record", 
  all.x = TRUE)

# Data from reports before IAPro
nopd.ftn.years <- 2011:first.year

nopd.ftn.2011 <- 302
nopd.ftn.2012 <- 306
nopd.ftn.2013 <- 421
nopd.ftn.2014 <- 409
nopd.ftn.2015 <- 724
# Add the computed value so that the line graph won't have a gap
nopd.ftn.2016 <- count.ftn.by.year$num[1]
nopd.ftn <- c(nopd.ftn.2011, nopd.ftn.2012, nopd.ftn.2013, nopd.ftn.2014, nopd.ftn.2015, nopd.ftn.2016)
t <- list(
  family = "sans serif",
  size = 14,
  color = toRGB("grey50"))
p.ftn.by.year <- plot_ly(count.ftn.by.year, x = ~year, 
                         # Start with FTN according to NOPD
                         y = ~num, name = 'Digital records', 
                         type = 'scatter', 
                         mode = 'lines+markers+text', 
                         text = ~num,
                         textposition = "top right",
                         line = list(color = 'rgb(22, 96, 167)', width = 3, dash = 'solid')) %>%

  # ftn according to data.nola.gov
  add_trace(x=nopd.ftn.years, y = nopd.ftn, name = 'Paper reports', 
            line = list(color = 'rgb(205, 12, 24)', width = 2, dash = 'dot'), 
            text = ~nopd.ftn,
            mode = 'lines+markers+text',
            textposition = "bottom center") %>%
  
  
  layout(xaxis = list(title = "Year", 
                      autosize = FALSE,
                      ticks = "outside",
                      tick0 = 0,
                      dtick = 1,
                      ticklen = 5,
                      tickwidth = 2,
                      tickcolor = toRGB("blue"),
                      showgrid = F,
                      range = years),
         
         yaxis = list(title = "Number times force used (FTN)", 
                      range = c(0, 1000), 
                      tick0 = 0,
                      showgrid = T),
         margin = list( b = 200))

p.ftn.by.year
gen.plotly.json(p.ftn.by.year, "ftn-by-year")

