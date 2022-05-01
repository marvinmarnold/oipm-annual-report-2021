check.vars(c("CURRENT.YEAR", "allegations.for.year"))

allegations.by.finding <- allegations.for.year %>%
  group_by(Allegation.finding.simple, Allegation.1)

allegation.count.by.finding <- summarise(allegations.by.finding, num = n())

p.allegations.by.finding <- plot_ly(allegation.count.by.finding) %>%
  
  # Stacked bars by exp
  add_trace(x = ~Allegation.finding.simple, 
            y = ~num, 
            type = 'bar',  
            name = ~Allegation.1, 
            color = ~Allegation.1) %>%
  
  layout(barmode = 'stack',
         margin = list(b = 150),
         hovermode = 'compare',
        # legend = list(x = 0, y = -.75),
         
         xaxis = list(title = "Allegation Finding", 
                      dtick = 1,
                      showgrid = F), 
         
         yaxis = list(title = "Number of allegations", showgrid = T))
  

p.allegations.by.finding
gen.plotly.json(p.allegations.by.finding, "allegations-by-finding")
