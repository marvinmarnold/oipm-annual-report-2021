check.vars(c("allegations.for.year"))


########################################################################################################
########################################################################################################
title <- "Top allegations"

alleg.by.alleg <- allegations.for.year %>% group_by(Allegation.simple)
count.by.alleg <- summarise(alleg.by.alleg, alleg.count = n())

p.top.alleg <- plot_ly(count.by.alleg,  type = 'pie', name = title,
                       labels = ~Allegation.1, 
                       values = ~alleg.count,
                       textposition = 'inside',
                       textinfo = 'label+value+percent',
                       insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(
    #legend = list(x = 0, y = -.75)
    hovermode = "compare", showlegend = TRUE
  )
p.top.alleg
gen.plotly.json(p.top.alleg, "allegations-most-common")
