check.vars(c("uof.for.year"))
title <- "Force by officer sex and race"

########################################################################################################
########################################################################################################
uof.by.sex <- uof.for.year %>% group_by(Officer.sex, Officer.race)
count.by.sex.race <- summarize(uof.by.sex, num.uof = n())

# Male officer UOF by type and race
uof.for.sex <- uof.for.year %>% filter(Officer.sex == 'M')
uof.by.type <- group_by(uof.for.sex, Force.type, Officer.race) 

# make a simple summary of uof count by type
uof.count.by.type <- summarise(uof.by.type, count = n())
uof.count.by.type

p.male.uof.by.type <- plot_ly(uof.count.by.type, 
                              x = ~Force.type, y = ~count, 
                              type = 'bar',  name = ~Officer.race, 
                              color = ~Officer.race) %>%
  
  layout(xaxis = list(showgrid = F, title = F), 
         yaxis = list(title = 'Number UOF'), 
         barmode = 'stack',
         hovermode = 'compare',
         margin = list(b = 150))

p.male.uof.by.type
gen.plotly.json(p.male.uof.by.type, "uof-by-officer-male-type-race")
