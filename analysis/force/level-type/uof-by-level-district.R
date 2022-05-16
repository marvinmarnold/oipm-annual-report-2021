check.vars(c("CURRENT.YEAR", "uof.all"))

########################################################################################################
########################################################################################################
# Combine 2015 UOF with all other uof taken directly from IAPro
uof.by.district.type <- uof.all %>% filter(year.of.record == CURRENT.YEAR) %>% group_by(District.or.division, Force.level)
count.by.district.type <- summarise(uof.by.district.type, num.uof = n())

# xs <- uof.for.year %>% distinct(District.or.division) %>% pull(District.or.division)
xs <- c("1st District", "2nd District", "3rd District", "4th District", "5th District", "6th District", "7th District", "8th District", "Other", "Special Operations", "Special or Criminal Investigations")
# bar.labels <- uof.for.year %>%
#     group_by(District.or.division) %>%
#     summarise(count = n()) %>%
#     pull(count)

bar.labels <- c(51, 131, 147, 61, 142, 137, 134, 180, 14, 86, 3)

annotations <- list(x = xs, y = bar.labels, text = bar.labels, xanchor = 'center',
                    yanchor = 'bottom',
                    showarrow = FALSE)

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
         
         yaxis = list(title = "Amount of force (UOF)", showgrid = T))%>%
  
  layout(annotations = annotations)

p.uof.by.district.type
gen.plotly.json(p.uof.by.district.type, "uof-by-level-district")

