check.vars(c("allegations.for.year", "actions.taken.for.year"))

########################################################################################################
########################################################################################################
title <- "Discipline by Officer's Sex"

complainant.info <- allegations.all %>% select(Officer.sex, Allegation.primary.key) %>% distinct()
detailed.actions.for.year <- merge(actions.taken.for.year%>% filter(Action.taken.OIPM != "None", Action.taken.OIPM != "Pending Investigation"), complainant.info, by = "Allegation.primary.key", all.x = TRUE)
detailed.actions.for.year <- detailed.actions.for.year %>% mutate(
  # There are actions taken without any corresponding allegations
  Officer.sex = case_when(
    is.na(Officer.sex) ~ "Unknown gender",
    TRUE ~ Officer.sex
  )
)

discipline.by.sex <- detailed.actions.for.year %>% group_by(Action.taken.OIPM, Officer.sex)
discipline.count.by.sex <- summarize(discipline.by.sex, num.allegations = n())

p.discipline.by.officer.sex <- plot_ly(discipline.count.by.sex, 
                                       x = ~Action.taken.OIPM, y = ~num.allegations, 
                                       type = 'bar',  name = ~Officer.sex, 
                                       color = ~Officer.sex) %>%
  
  layout(xaxis = list(title = F, 
                      showgrid = F), 
         yaxis = list(title = 'Number allegations'), 
         barmode = 'stack',
         hovermode = 'compare', 
         margin = list(r = 100, b = 100))

p.discipline.by.officer.sex
gen.plotly.json(p.discipline.by.officer.sex, "discipline-by-officer-sex")
