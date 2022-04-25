########################################################################################################
########################################################################################################
title <- "Top sustained"

sustained.alleg.by.alleg <- allegations.for.year %>% filter(Disposition.OIPM.by.officer == "Sustained") %>% group_by(Allegation.simple)
sustained.count.by.alleg <- summarise(sustained.alleg.by.alleg, count = n())

p.top.sustained.alleg <- plot_ly(sustained.count.by.alleg,  type = 'pie', name = title,
                                 labels = ~Allegation.simple, 
                                 values = ~count,
                                 textposition = 'inside',
                                 textinfo = 'label+value+percent',
                                 insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(hovermode = "compare", showlegend = TRUE)

p.top.sustained.alleg
gen.plotly.json(p.top.sustained.alleg, "allegations-sustained-most-common")
