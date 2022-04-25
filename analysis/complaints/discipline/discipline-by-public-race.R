check.vars(c("allegations.for.year", "actions.taken.for.year"))

########################################################################################################
########################################################################################################
title <- "Discipline by Complainant's Race"
actions.taken.for.year
complainant.info <- allegations.all %>% select(Citizen.race, Allegation.primary.key) %>% distinct()
detailed.actions.for.year <- merge(actions.taken.for.year%>% filter(Action.taken.OIPM != "None", Action.taken.OIPM != "Pending Investigation"), complainant.info, by = "Allegation.primary.key", all.x = TRUE)
detailed.actions.for.year <- detailed.actions.for.year %>% mutate(
  # There are actions taken without any corresponding allegations
  Citizen.race = case_when(
    is.na(Citizen.race) ~ "Unknown race",
    TRUE ~ Citizen.race
  )
)

discipline.by.race <- detailed.actions.for.year %>% group_by(Action.taken.OIPM, Citizen.race)
discipline.count.by.race <- summarize(discipline.by.race, num.allegations = n())

p.discipline.by.race <- plot_ly(discipline.count.by.race, 
                                x = ~Action.taken.OIPM, y = ~num.allegations, 
                                type = 'bar',  name = ~Citizen.race, 
                                color = ~Citizen.race) %>%
  
  layout(xaxis = list(title = F, 
                      showgrid = F), 
         yaxis = list(title = 'Number allegations'), 
         barmode = 'stack',
         hovermode = 'compare', 
         legend = list(x = 0, y = -0.5),
         margin = list(r = 100, b = 100),
         title = F)

p.discipline.by.race
gen.plotly.json(p.discipline.by.race, "discipline-by-public-race")

allegations.all %>% filter(year.of.record == CURRENT.YEAR) %>% filter(Citizen.race == "Black / African American") %>% nrow
allegations.all %>% filter(year.of.record == CURRENT.YEAR) %>% filter(Citizen.race == "White") %>% nrow

