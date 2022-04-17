# Make a pie chart by type of force for each level of force
check.vars(c("uof.for.year"))
title <- "UOF by type"

lvls <- c("L1", "L2", "L3", "L4")
########################################################################################################
########################################################################################################
uof.count.by.type <- uof.for.year %>% group_by(Force.type, Force.level)
uof.count.by.type <- summarise(uof.count.by.type, count = n())

p.uof.pies.each.type <- lapply(lvls, function (lvl) {
  
  # Filter UOF by year
  uof.for.lvl <- uof.count.by.type %>% filter(Force.level == lvl)
  total.for.lvl <- sum(uof.for.lvl$count)
  lvl.title <-paste("Level", lvl, "Total = ", total.for.lvl)
  
  # Construct pie chart
  plot_ly(uof.for.lvl,  type = 'pie', name = lvl.title,
          labels = ~Force.type, 
          values = ~count,
          textposition = 'inside',
          textinfo = 'label+value+percent',
          insidetextfont = list(color = '#FFFFFF')) %>%
    
    layout(hovermode = "compare", title = lvl.title, showlegend = FALSE)
})

p.uof.pies.each.type[[3]]
gen.plotly.json(p.uof.pies.each.type[[1]], "uof-pie-l1-type")
gen.plotly.json(p.uof.pies.each.type[[2]], "uof-pie-l2-type")
gen.plotly.json(p.uof.pies.each.type[[3]], "uof-pie-l3-type")
gen.plotly.json(p.uof.pies.each.type[[4]], "uof-pie-l4-type")
