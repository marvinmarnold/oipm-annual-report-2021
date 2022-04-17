check.vars(c("uof.for.year"))
title <- "Force by victim sex and race"

########################################################################################################
########################################################################################################
uof.by.sex <- uof.for.year %>% group_by(Citizen.sex, Citizen.race)
count.by.sex.race <- summarize(uof.by.sex, num.uof = n())
count.by.male.race <- count.by.sex.race %>% filter(Citizen.sex == 'M')

# Construct pie chart
title <- "UOF by male victim race"
p.uof.by.male.victim.race <- plot_ly(count.by.male.race,  type = 'pie',
                                     labels = ~Citizen.race, 
                                     values = ~num.uof,
                                     textposition = 'inside',
                                     textinfo = 'label+value+percent',
                                     insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(hovermode = "compare", showlegend = FALSE)

p.uof.by.male.victim.race
gen.plotly.json(p.uof.by.male.victim.race, "uof-by-public-male-race")
