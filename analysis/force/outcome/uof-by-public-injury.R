check.vars(c("uof.for.year"))

########################################################################################################
########################################################################################################
title <- "Victim injuries during UOF"

uof.by.victim.injury <- uof.for.year %>% group_by(Individual.injured)
count.by.victim.injury <- uof.by.victim.injury %>% summarise(count = n())

p.uof.by.victim.injury <- plot_ly(count.by.victim.injury,  type = 'pie', 
                                  labels = ~Individual.injured, 
                                  values = ~count,
                                  textposition = 'inside',
                                  textinfo = 'label+value+percent',
                                  insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(hovermode = "compare", showlegend = FALSE)

p.uof.by.victim.injury
gen.plotly.json(p.uof.by.victim.injury, "uof-by-public-injury")
