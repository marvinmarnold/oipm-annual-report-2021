check.vars(c("actions.taken.for.year"))
title <- "Discipline by allegation"

########################################################################################################
########################################################################################################

discipline.by.allegation <- actions.taken.for.year %>% 
  filter(Action.taken.OIPM != "None", Action.taken.OIPM != "Pending Investigation") %>% group_by(Action.taken.OIPM, Allegation.simple)
discipline.count.by.allegation <- summarize(discipline.by.allegation, num.allegations = n())

bar.data <- actions.taken.for.year %>% 
  filter(Action.taken.OIPM != "None", Action.taken.OIPM != "Pending Investigation") %>% group_by(Action.taken.OIPM) %>%
       summarise(count = n())
bar.labels <- bar.data %>% pull(count)
bar.categories <- bar.data %>% pull(Action.taken.OIPM)

annotations <- list(x = bar.categories, y = bar.labels, text = bar.labels, xanchor = 'center',
              yanchor = 'bottom',
              showarrow = FALSE)

p.discipline.by.allegation <- plot_ly(discipline.count.by.allegation, 
                                      x = ~Action.taken.OIPM, y = ~num.allegations, 
                                      type = 'bar',  name = ~Allegation.simple, 
                                      color = ~Allegation.simple) %>%
  
  layout(xaxis = list(categoryorder = "array",
                        categoryarray = bar.categories,
                        title = F, 
                        showgrid = F, 
                        ticktext = bar.categories, 
                        tickvals = bar.categories,
                        tickmode = "array"), 
         yaxis = list(title = 'Number allegations'), 
         barmode = 'stack',
         hovermode = 'compare', 
         margin = list(r = 100, b = 100)) %>%
  
  layout(annotations = annotations)

p.discipline.by.allegation
gen.plotly.json(p.discipline.by.allegation, "discipline-by-allegation")
