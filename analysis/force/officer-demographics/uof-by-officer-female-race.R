check.vars(c("uof.for.year"))
title <- "Force by officer sex and race"

########################################################################################################
########################################################################################################
uof.by.sex <- uof.for.year %>% group_by(Officer.sex, Officer.race)
count.by.sex.race <- summarize(uof.by.sex, num.uof = n())
count.by.female.race <- count.by.sex.race %>% filter(Officer.sex == 'F')

# Construct pie chart
title <- "UOF by female officer race"
p.uof.by.female.officer.race <- plot_ly(count.by.female.race,  type = 'pie',
                                        labels = ~Officer.race, 
                                        values = ~num.uof,
                                        textposition = 'inside',
                                        textinfo = 'label+value+percent',
                                        insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(hovermode = "compare", showlegend = FALSE)

p.uof.by.female.officer.race
gen.plotly.json(p.uof.by.female.officer.race, "uof-by-officer-female-race")
