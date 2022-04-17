check.vars(c("uof.for.year"))
title <- "UOF by effectiveness"

########################################################################################################
########################################################################################################

uof.by.type.effective <- uof.for.year %>% group_by(Force.type, UOF.effective)
effective.by.type <- summarise(uof.by.type.effective, count = n())
effective.by.type <- effective.by.type %>% 
  group_by(Force.type) %>%
  mutate(type.count = sum(count)) %>%
  mutate(
    effectiveness = case_when(
      UOF.effective == "Yes" ~ "Effective",
      UOF.effective == "No" ~ "Ineffective",
      TRUE ~ "Limited effectiveness"
    )
  ) %>%
  group_by(effectiveness, add = TRUE) %>%
  mutate(pct = round(100 * count / type.count, 2))
effective.by.type

p.uof.by.effectiveness <- plot_ly(effective.by.type, 
                                  x = ~Force.type, y = ~pct, 
                                  type = 'bar',  
                                  name = ~effectiveness, 
                                  color = ~effectiveness) %>%
  
  layout(xaxis = list(title = "Type of force", 
                      showgrid = F), 
         yaxis = list(title = 'Effectiveness by type of force'), 
         barmode = 'stack',
         hovermode = 'compare',
         margin = list(b = 150))

p.uof.by.effectiveness
gen.plotly.json(p.uof.by.effectiveness, "uof-by-effectiveness")
