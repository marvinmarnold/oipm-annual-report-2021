check.vars(c("CURRENT.YEAR", "complaints.by.officer.for.year"))
title <- "Force by disposition and race of officer"

########################################################################################################
########################################################################################################

misconduct.disposition.race <- complaints.by.officer.for.year %>% group_by(Disposition.OIPM.by.officer, Officer.Race)
count.by.disposition.race <- summarise(misconduct.disposition.race, num.dispositions = n())

dispositions <- unique(misconduct.disposition.race$Disposition.OIPM.by.officer)

bar.data <- complaints.by.officer.for.year %>% 
  group_by(Disposition.OIPM.by.officer) %>%
  summarise(count = n())

bar.labels <- bar.data %>% pull(count)
bar.categories <- bar.data %>% pull(Disposition.OIPM.by.officer)

annotations <- list(x = bar.categories, y = bar.labels, text = bar.labels, xanchor = 'center',
              yanchor = 'bottom',
              showarrow = FALSE)
              
p.complaint.disposition.by.officer.race <- plot_ly(count.by.disposition.race) %>% 
  
  add_trace(x = ~Disposition.OIPM.by.officer, y = ~num.dispositions, type = 'bar',  
            name = ~Officer.Race, color = ~Officer.Race) %>%
  
  layout(xaxis = list(categoryorder = "array",
                        categoryarray = bar.categories,
                        title = F, 
                        showgrid = F, 
                        ticktext = bar.categories, 
                        tickvals = bar.categories,
                        tickmode = "array"), 
         yaxis = list(title = 'Num complaints resulting in outcome'), 
         barmode = 'stack',
         margin = list(b = 100)) %>%
  
  layout(annotations = annotations)

p.complaint.disposition.by.officer.race
gen.plotly.json(p.complaint.disposition.by.officer.race, "complaints-by-officer-race-disposition")
