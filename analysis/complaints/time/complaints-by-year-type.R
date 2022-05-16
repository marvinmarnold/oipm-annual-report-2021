check.vars(c("allegations.all"))
title <- "Complaints by year"

start.year <- 2016
end.year <- CURRENT.YEAR
years.all <- start.year:end.year

########################################################################################################
########################################################################################################

xs <- c(2016, 2016, 2017, 2017, 2018, 2018)
ys <- c(845, 585, 448, 729, 425, 679)
vals <- c(260, 585, 448, 281, 425, 254)

complaints.by.year <- allegations.all %>% 
  filter(year.of.record >= start.year) %>%
  filter(year.of.record <= end.year) %>%
  distinct(PIB.Control.Number, .keep_all = TRUE) %>%
  group_by(year.of.record, Incident.type)

complaint.count.by.year.type <- summarise(complaints.by.year, num = n())

bar.labels <- complaint.count.by.year.type %>%
    group_by(year.of.record) %>%
    summarise(count = sum(num)) %>%
    pull(count)

annotations <- list(x = years.all, y = bar.labels, text = bar.labels, xanchor = 'center',
                    yanchor = 'bottom',
                    showarrow = FALSE)

p.complaints.by.year.type <- plot_ly(complaint.count.by.year.type) %>%
  
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
         
         yaxis = list(title = "Number of complaints", showgrid = T))  %>%
         layout(annotations = annotations)

p.complaints.by.year.type
gen.plotly.json(p.complaints.by.year.type, "complaints-by-year-type")
