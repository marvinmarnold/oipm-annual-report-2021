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

p.discipline.by.officer.race <- plot_ly(discipline.count.by.race, 
                                        x = ~Action.taken.OIPM, y = ~num.allegations, 
                                        type = 'bar',  name = ~Officer.Race, 
                                        color = ~Officer.Race) %>%
  
  layout(xaxis = list(title = F, 
                      showgrid = F), 
         yaxis = list(title = 'Number allegations'), 
         barmode = 'stack',
         hovermode = 'compare', 
         legend = list(x = 0, y = -1.5),
         margin = list(r = 100, b = 100),
         title = F)

p.discipline.by.officer.race
gen.plotly.json(p.discipline.by.officer.race, "discipline-by-officer-race")
