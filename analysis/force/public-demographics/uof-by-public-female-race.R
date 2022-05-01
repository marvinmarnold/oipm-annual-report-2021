check.vars(c("uof.for.year"))
title <- "Force by victim sex and race"

########################################################################################################
########################################################################################################
uof.by.sex <- uof.for.year %>% group_by(Individual.sex, Individual.race)
count.by.sex.race <- summarize(uof.by.sex, num.uof = n())
count.by.female.race <- count.by.sex.race %>% filter(Individual.sex == 'F')

# Construct pie chart
title <- "UOF by female victim race"
p.uof.by.female.victim.race <- plot_ly(count.by.female.race,  type = 'pie',
                                       labels = ~Individual.race, 
                                       values = ~num.uof,
                                       textposition = 'inside',
                                       textinfo = 'label+value+percent',
                                       insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(hovermode = "compare", showlegend = FALSE)

p.uof.by.female.victim.race
gen.plotly.json(p.uof.by.female.victim.race, "uof-by-public-female-race")
