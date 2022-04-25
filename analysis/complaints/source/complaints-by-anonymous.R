check.vars(c("CURRENT.YEAR", "allegations.for.year"))

########################################################################################################
########################################################################################################
anon.allegs <-  allegations.for.year %>% 
  distinct(Individual.primary.key, PIB.Control.Number, .keep_all = TRUE) %>%
  filter(Is.Anonymous == "Anon - Explicit") %>% 
  group_by(Is.Anonymous, Disposition.OIPM.by.officer)
num.anon.allegs <- anon.allegs %>% summarise(num.allegs = n())

p.anon.allegs <- plot_ly(num.anon.allegs,
                         x = ~Is.Anonymous,
                         y = ~num.allegs,
                         name = ~Disposition.OIPM.by.officer,
                         type = "bar",
                         color = ~Disposition.OIPM.by.officer
) %>% 
  
  layout(xaxis = list(title = "Anonymous complaints by outcome", 
                      showgrid = F), 
         yaxis = list(title = 'Number of complaints'), 
         barmode = 'stack',
         hovermode = 'compare', 
         margin = list(r = 100, b = 100))

p.anon.allegs
gen.plotly.json(p.anon.allegs, "complaints-by-anonymous")

