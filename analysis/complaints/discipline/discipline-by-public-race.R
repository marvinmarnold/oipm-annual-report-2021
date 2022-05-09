check.vars(c("allegations.for.year", "actions.taken.for.year"))

########################################################################################################
########################################################################################################
title <- "Discipline by Complainant's Race"

complainant.info <- allegations.all %>% select(Individual.race, Allegation.primary.key) %>% distinct()
detailed.actions.for.year <- merge(actions.taken.for.year%>% filter(Action.taken.OIPM != "None", Action.taken.OIPM != "Pending Investigation"), complainant.info, by = "Allegation.primary.key", all.x = TRUE)
detailed.actions.for.year <- detailed.actions.for.year %>% mutate(
  # There are actions taken without any corresponding allegations
  Individual.race = case_when(
    is.na(Individual.race) ~ "Unknown race",
    TRUE ~ Individual.race
  )
)

discipline.by.race <- detailed.actions.for.year %>% group_by(Action.taken.OIPM, Individual.race)
discipline.count.by.race <- summarize(discipline.by.race, num.allegations = n())

bar.data <- detailed.actions.for.year %>% group_by(Action.taken.OIPM) %>% 
       summarise(count = n())
bar.labels <- bar.data %>% pull(count)
bar.categories <- bar.data %>% pull(Action.taken.OIPM)

annotations <- list(x = bar.categories, y = bar.labels, text = bar.labels, xanchor = 'center',
              yanchor = 'bottom',
              showarrow = FALSE)

p.discipline.by.race <- plot_ly(discipline.count.by.race, 
                                x = ~Action.taken.OIPM, y = ~num.allegations, 
                                type = 'bar',  name = ~Individual.race, 
                                color = ~Individual.race) %>%
  
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
         legend = list(x = 0, y = -0.5),
         margin = list(r = 100, b = 100),
         title = F) %>%
  
  layout(annotations = annotations)

p.discipline.by.race
gen.plotly.json(p.discipline.by.race, "discipline-by-public-race")

allegations.all %>% filter(year.of.record == CURRENT.YEAR) %>% filter(Individual.race == "Black / African American") %>% nrow
allegations.all %>% filter(year.of.record == CURRENT.YEAR) %>% filter(Individual.race == "White") %>% nrow

