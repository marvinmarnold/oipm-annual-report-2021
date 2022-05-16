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

bar.data <- detailed.actions.for.year %>% group_by(Action.taken.OIPM) %>% 
       summarise(count = n())
bar.labels <- bar.data %>% pull(count)
bar.categories <- bar.data %>% pull(Action.taken.OIPM)

annotations <- list(x = bar.categories, y = bar.labels, text = bar.labels, xanchor = 'center',
              yanchor = 'bottom',
              showarrow = FALSE)

p.discipline.by.officer.sex <- plot_ly(discipline.count.by.sex, 
                                       x = ~Action.taken.OIPM, y = ~num.allegations, 
                                       type = 'bar',  name = ~Officer.sex, 
                                       color = ~Officer.sex) %>%
  
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

p.discipline.by.officer.sex
gen.plotly.json(p.discipline.by.officer.sex, "discipline-by-officer-sex")
