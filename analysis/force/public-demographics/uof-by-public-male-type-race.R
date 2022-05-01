check.vars(c("uof.for.year"))
title <- "Force by victim sex and race"

########################################################################################################
########################################################################################################
uof.by.sex <- uof.for.year %>% group_by(Individual.sex, Individual.race)
count.by.sex.race <- summarize(uof.by.sex, num.uof = n())

# Male victim UOF by type and race
uof.for.sex <- uof.for.year %>% filter(Individual.sex == 'M')
uof.by.type <- group_by(uof.for.sex, Force.type, Individual.race) 

# make a simple summary of uof count by type
uof.count.by.type <- summarise(uof.by.type, count = n())
uof.count.by.type

p.male.victim.uof.by.type <- plot_ly(uof.count.by.type, 
                                     x = ~Force.type, y = ~count, 
                                     type = 'bar',  
                                     name = ~Individual.race, 
                                     color = ~Individual.race) %>%
  
  layout(xaxis = list(showgrid = F), 
         yaxis = list(title = 'Number UOF'), 
         barmode = 'stack',
         hovermode = 'compare',
         margin = list(b = 150))

p.male.victim.uof.by.type
gen.plotly.json(p.male.victim.uof.by.type, "uof-by-public-male-type-race")
