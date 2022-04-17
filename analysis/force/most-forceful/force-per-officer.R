check.vars(c("uof.for.year", "adp.for.year"))

########################################################################################################
########################################################################################################

num.officers <- nrow(adp.for.year)
num.officers.force <- uof.for.year %>% select(Officer.primary.key) %>% distinct %>% nrow

num.ftn <- uof.for.year %>% distinct(FIT.Number) %>% nrow
num.uof <- uof.for.year %>% nrow

labels <- c("NOPD average", paste("Average for officers who used force at least once in", CURRENT.YEAR))
force.class <- c("FTN: Force incidents per officer", "UOF: Force amount per officer")
avg.overall <- c(num.ftn / num.officers, num.uof / num.officers)
avg.w.force <- c(num.ftn / num.officers.force, num.uof / num.officers.force)

force.per.officer <- data.frame(
  force.class = force.class,
  avg.overall = avg.overall,
  avg.w.force = avg.w.force
)

p.force.per.officer <- plot_ly(force.per.officer, 
                               x = ~force.class, 
                               y = ~avg.overall, type = 'bar', name = labels[1]) %>%
  
  add_trace(y = ~avg.w.force, name = labels[2]) %>%
  layout(xaxis = list(title = FALSE), yaxis = list(title = FALSE), barmode = 'group')

p.force.per.officer
gen.plotly.json(p.force.per.officer, "force-per-officer")
