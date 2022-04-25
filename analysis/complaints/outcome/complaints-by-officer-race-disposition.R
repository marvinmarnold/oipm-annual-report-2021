check.vars(c("CURRENT.YEAR", "complaints.by.officer.for.year"))
title <- "Force by disposition and race of officer"

########################################################################################################
########################################################################################################

misconduct.disposition.race <- complaints.by.officer.for.year %>% group_by(Disposition.OIPM.by.officer, Officer.Race)
count.by.disposition.race <- summarise(misconduct.disposition.race, num.dispositions = n())

dispositions <- unique(misconduct.disposition.race$Disposition.OIPM.by.officer)
xform <- list(categoryorder = "array",
              categoryarray = dispositions,
              title = "Complaint outcomes", 
              showgrid = T)

p.complaint.disposition.by.officer.race <- plot_ly(count.by.disposition.race) %>% 
  
  add_trace(x = ~Disposition.OIPM.by.officer, y = ~num.dispositions, type = 'bar',  
            name = ~Officer.Race, color = ~Officer.Race) %>%
  
  layout(xaxis = xform, 
         yaxis = list(title = 'Num complaints resulting in outcome'), 
         barmode = 'stack',
         margin = list(b = 100))

p.complaint.disposition.by.officer.race
gen.plotly.json(p.complaint.disposition.by.officer.race, "complaints-by-officer-race-disposition")
