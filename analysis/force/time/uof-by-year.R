check.vars(c("CURRENT.YEAR", "uof.all"))
title <- "UOF by year"

# Analyze years 2016 - 2018
first.year <- 2016
years <- first.year:CURRENT.YEAR

# Count total UOF by year. Replace 0 with NA 
uof.by.year <- uof.all %>% group_by(year.of.record)
count.uof.by.year <- uof.by.year %>% summarise(num = n())
count.uof.by.year <- merge(
  data.frame(year = years), 
  count.uof.by.year, 
  by.x = "year", 
  by.y = "year.of.record", 
  all.x = TRUE)

# Data from reports before IAPro
nopd.uof.years <- 2013:first.year

nopd.uof.2013 <- 725
nopd.uof.2014 <- 706
nopd.uof.2015 <- 1071
# Add the computed value so that the line graph won't have a gap
uof.2016 <- count.uof.by.year$num[1]
nopd.uof <- c(nopd.uof.2013, nopd.uof.2014, nopd.uof.2015, uof.2016)

p.uof.by.year <- plot_ly(count.uof.by.year, x = ~year, 
                         # Start with FTN according to NOPD
                         y = ~num, name = 'Digital records', 
                         type = 'scatter', 
                         mode = 'lines+markers+text', 
                         text = ~num,
                         textposition = "top center",
                         line = list(color = 'rgb(22, 96, 167)', width = 3, dash = 'solid')) %>%
  
  # UOF according to data.nola.gov
  add_trace(x=nopd.uof.years, y = nopd.uof, name = 'Paper reports', 
            line = list(color = 'rgb(205, 12, 24)', width = 2, dash = 'dot'), 
            text = ~nopd.uof,
            textposition = "bottom right",
            mode = 'lines+markers+text') %>%
  
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
         
         yaxis = list(title = "Number times force used (UOF)", 
                      range = c(0, 2500), 
                      tick0 = 0,
                      showgrid = T),
         hovermode = 'compare', 
         margin = list( b = 200))

p.uof.by.year
gen.plotly.json(p.uof.by.year, "uof-by-year")

