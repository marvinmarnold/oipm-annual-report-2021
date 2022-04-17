check.vars(c("CURRENT.YEAR", "uof.all", "IAPRO.FIRST.YEAR"))

########################################################################################################
########################################################################################################
# Combine 2015 UOF with all other uof taken directly from IAPro
all.uof.with.lvl.type <- uof.all %>% 
  filter(year.of.record >= IAPRO.FIRST.YEAR, year.of.record <= CURRENT.YEAR) %>%
  select(Force.type, Force.level, year.of.record)
# uof.2015.with.lvl.type <- uof.reported.2015 %>% select(Force.type, Force.level, year.of.record)
# all.uof.with.lvl.type <- rbind(all.uof.with.lvl.type, uof.2015.with.lvl.type) %>% mutate(
#   Force.type = trim(Force.type)
# )

lvls <- c("L1", "L2", "L3", "L4")
p.lvl.by.year <- lapply(lvls, function (lvl) {
  
  # Filter UOF by year
  uof.for.lvl <- all.uof.with.lvl.type %>% filter(Force.level == lvl) %>% group_by(year.of.record, Force.type)
  
  # make a simple summary of uof count by type
  uof.count.by.type <- summarise(uof.for.lvl, count = n())
  
  p.uof.by.type <- plot_ly(uof.count.by.type)  %>%
    add_trace(
      x = ~year.of.record, y = ~count, 
      type = 'bar',  name = ~Force.type, 
      color = ~Force.type) %>%
    
    layout(title = paste("Level", lvl, "Force"),
           xaxis = list(categoryorder = "array",
                        categoryarray = lvls,
                        title = F, 
                        showgrid = F, 
                        dtick = 1,
                        tick0 = 2016), 
           yaxis = list(title = 'Amount of force (UOF)'),
           legend = list(x = 0, y = -.45), 
           barmode = 'stack',
           hovermode = 'compare')
})
p.lvl.by.year[[2]]

gen.plotly.json(p.lvl.by.year[[1]], "uof-by-level-year-1")
gen.plotly.json(p.lvl.by.year[[2]], "uof-by-level-year-2")
gen.plotly.json(p.lvl.by.year[[3]], "uof-by-level-year-3")
gen.plotly.json(p.lvl.by.year[[4]], "uof-by-level-year-4")

