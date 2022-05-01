check.vars(c("allegations.all"))
title <- "Allegations by year"

start.year <- 2016
end.year <- CURRENT.YEAR
years.all <- start.year:end.year

###############################################################################
###############################################################################

xs <- c(2016, 2016, 2017, 2017, 2018, 2018)
ys <- c(1321, 1935, 933, 1546, 822, 1328)
vals <- c(1321, 614, 933, 613, 822, 506)

annotations <- list(x = xs, y = ys, text = vals, xanchor = 'center',
                    yanchor = 'top',
                    showarrow = FALSE)

allegations.by.year <- allegations.all %>% 
  filter(year.of.record >= start.year) %>%
  filter(year.of.record <= end.year) %>%
  group_by(year.of.record, Incident.type)

count.by.year.type <- summarise(allegations.by.year, num = n())

p.allegations.by.year.type <- plot_ly(count.by.year.type) %>%
  
  # Stacked bars by exp
  add_trace(x = ~year.of.record, 
            y = ~num, 
            type = 'bar',  
            name = ~Incident.type, 
            color = ~Incident.type) %>%
  
  layout(barmode = 'stack',
         margin = list(b = 150),
         hovermode = 'compare',
         xaxis = list(title = "Year", 
                      dtick = 1,
                      showgrid = F), 
         
         yaxis = list(title = "Number of allegations", showgrid = T))
# %>%  layout(annotations = annotations)

p.allegations.by.year.type
gen.plotly.json(p.allegations.by.year.type, "allegations-by-year-type")
