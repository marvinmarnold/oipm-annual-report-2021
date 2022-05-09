check.vars(c("allegations.for.year", "actions.taken.for.year"))

########################################################################################################
########################################################################################################

title <- "Discipline by Officer's Race"

complainant.info <- allegations.all %>% select(Officer.Race, Allegation.primary.key) %>% distinct()
detailed.actions.for.year <- merge(actions.taken.for.year %>% filter(Action.taken.OIPM != "None", Action.taken.OIPM != "Pending Investigation"), complainant.info, by = "Allegation.primary.key", all.x = TRUE)
detailed.actions.for.year <- detailed.actions.for.year %>% mutate(
  # There are actions taken without any corresponding allegations
  Officer.Race = case_when(
    is.na(Officer.Race) ~ "Unknown race",
    TRUE ~ Officer.Race
  )
)

discipline.by.race <- detailed.actions.for.year %>% group_by(Action.taken.OIPM, Officer.Race)
discipline.count.by.race <- summarize(discipline.by.race, num.allegations = n())

bar.data <- detailed.actions.for.year %>% group_by(Action.taken.OIPM) %>% 
       summarise(count = n())
bar.labels <- bar.data %>% pull(count)
bar.categories <- bar.data %>% pull(Action.taken.OIPM)

annotations <- list(x = bar.categories, y = bar.labels, text = bar.labels, xanchor = 'center',
              yanchor = 'bottom',
              showarrow = FALSE)

p.discipline.by.officer.race <- plot_ly(discipline.count.by.race, 
                                        x = ~Action.taken.OIPM, y = ~num.allegations, 
                                        type = 'bar',  name = ~Officer.Race, 
                                        color = ~Officer.Race) %>%
  
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
         legend = list(x = 0, y = -1.5),
         margin = list(r = 100, b = 100),
         title = F) %>%
  
  layout(annotations = annotations)

p.discipline.by.officer.race
gen.plotly.json(p.discipline.by.officer.race, "discipline-by-officer-race")
