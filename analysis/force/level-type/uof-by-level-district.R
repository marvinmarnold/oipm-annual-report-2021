check.vars(c("CURRENT.YEAR", "uof.all"))

########################################################################################################
########################################################################################################
# Combine 2015 UOF with all other uof taken directly from IAPro
uof.by.district.type <- uof.all %>% filter(year.of.record == CURRENT.YEAR) %>% group_by(District.or.division, Force.level)
count.by.district.type <- summarise(uof.by.district.type, num.uof = n())

uof.for.year %>% select(District.or.division) %>% distinct

p.uof.by.district.type <- plot_ly(count.by.district.type) %>%
  
  # Stacked bars by exp
  add_trace(x = ~District.or.division, 
            y = ~num.uof, 
            type = 'bar',  
            name = ~Force.level, 
            color = ~Force.level) %>%
  
  layout(barmode = 'stack',
         margin = list(b = 150),
         hovermode = 'compare',
         xaxis = list(title = F, 
                      showgrid = F), 
         
         yaxis = list(title = "Amount of force (UOF)", showgrid = T))

p.uof.by.district.type
gen.plotly.json(p.uof.by.district.type, "uof-by-level-district")

