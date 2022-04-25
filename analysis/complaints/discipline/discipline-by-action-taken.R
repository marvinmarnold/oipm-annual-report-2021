# Make a pie chart by type of force for each level of force
check.vars(c("actions.taken.for.year"))
title <- "Actions taken by action"

########################################################################################################
########################################################################################################
relevant.actions <- actions.taken.for.year %>% 
  filter(Action.taken.OIPM != "None", Action.taken.OIPM != "Pending Investigation") %>%
  group_by(Action.taken.OIPM)

count.by.action <- relevant.actions %>% summarise(count = n())

p.actions.taken <- plot_ly(count.by.action,  type = 'pie', 
                           labels = ~Action.taken.OIPM, 
                           values = ~count,
                           textposition = 'inside',
                           textinfo = 'label+value+percent',
                           insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(hovermode = "compare", title = F, showlegend = T)

p.actions.taken
gen.plotly.json(p.actions.taken, "discipline-by-action-taken")

#### 

relevant.actions <- actions.taken.for.year %>% mutate(
  Action.taken.OIPM = case_when(
    Action.taken.OIPM == "None" ~ "No basis for discipline",
    TRUE ~ Action.taken.OIPM
  )) %>%
  filter(Action.taken.OIPM != "Pending Investigation") %>%
  group_by(Action.taken.OIPM)

count.by.action <- relevant.actions %>% summarise(count = n())

p.actions.taken.all <- plot_ly(count.by.action,  type = 'pie', 
                           labels = ~Action.taken.OIPM, 
                           values = ~count,
                           textposition = 'inside',
                           textinfo = 'label+value+percent',
                           insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(hovermode = "compare", title = F, showlegend = T)

p.actions.taken.all
gen.plotly.json(p.actions.taken.all, "discipline-by-action-taken-all")
