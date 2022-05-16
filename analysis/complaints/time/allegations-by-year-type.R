check.vars(c("allegations.all"))
title <- "Allegations by year"

start.year <- 2016
end.year <- CURRENT.YEAR
years.all <- start.year:end.year

###############################################################################
###############################################################################

allegations.by.year <- allegations.all %>% 
  filter(year.of.record >= start.year) %>%
  filter(year.of.record <= end.year) %>%
  group_by(year.of.record, Incident.type)

bar.labels <- allegations.by.year %>%
    group_by(year.of.record) %>%
    summarise(count = n()) %>%
    pull(count)

annotations <- list(x = years.all, y = bar.labels, text = bar.labels, xanchor = 'center',
                    yanchor = 'bottom',
                    showarrow = FALSE)

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
         xaxis = list(categoryorder = "array",
                        categoryarray = years.all,
                        title = F,
                        showgrid = F,
                        ticktext = years.all,
                        tickvals = years.all,
                        tickmode = "array"),
         yaxis = list(title = "Number of allegations", showgrid = T)) %>%  layout(annotations = annotations)

p.allegations.by.year.type
gen.plotly.json(p.allegations.by.year.type, "allegations-by-year-type")
