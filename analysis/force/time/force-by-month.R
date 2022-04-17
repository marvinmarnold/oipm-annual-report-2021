check.vars(c("uof.all"))
title <- "Force by month"

########################################################################################################
########################################################################################################
uof.for.year <- uof.all %>% filter(year.of.record == CURRENT.YEAR)
ftn.for.year <- uof.for.year %>% distinct(FIT.Number, .keep_all = TRUE)

months <- c("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
uof.by.month <- uof.for.year %>% group_by(Month.occurred) %>% summarize(num.uof = n())
ftn.by.month <- ftn.for.year %>% filter(Month.occurred <= 12) %>% group_by(Month.occurred) %>% summarize(num.ftn = n())
force.by.month <- data.frame(month = months, 
                             uof.by.month = uof.by.month$num.uof, 
                             ftn.by.month = ftn.by.month$num.ftn)

force.by.month <- force.by.month %>% mutate(
  uof.per.ftn = uof.by.month / ftn.by.month
)

p.force.by.month <- plot_ly(force.by.month, x = ~month, y = ~ftn.by.month, name = 'Force Incident (FTN)', type = 'scatter', 
                            mode = 'lines+markers', 
                            line = list(color = 'rgb(22, 96, 167)', width = 2, dash = 'solid')) %>%
  
  add_trace(y = ~uof.by.month, name = 'Force Amount (UOF)', 
            mode = 'lines+markers',
            line = list(color = 'rgb(205, 12, 24)', width = 2, dash = 'solid')) %>%
  
  add_trace(y = ~uof.per.ftn, name = "Force per incident (UOF/FTN)", yaxis = 'y2',
            mode = 'lines+markers',
            line = list(color = 'rgb(25, 12, 24)', width = 2, dash = 'dashdot')) %>%
  
  layout(
    hovermode = 'compare',
    margin = list(b = 150),
    xaxis = list(categoryorder = "array",
                 categoryarray = months,
                 title = paste("Month in", CURRENT.YEAR), 
                 showgrid = F), 
    yaxis = list(title = 'Num incidents', showgrid = T),
    yaxis2 = list(side = 'right', overlaying = "y", title = "Force per incident", range = c(0, 10)))

p.force.by.month
gen.plotly.json(p.force.by.month, "force-by-month")
