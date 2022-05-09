check.vars(c("uof.for.year"))
title <- "Force by victim sex and race"

########################################################################################################
########################################################################################################
uof.by.sex <- uof.for.year %>% group_by(Individual.sex, Individual.race)
count.by.sex.race <- summarize(uof.by.sex, num.uof = n())

# Female victim UOF by type and race
uof.for.sex <- uof.for.year %>% filter(Individual.sex == 'F')
uof.by.type <- group_by(uof.for.sex, Force.type, Individual.race) 

# make a simple summary of uof count by type
uof.count.by.type <- summarise(uof.by.type, count = n())
uof.count.by.type

bar.data <- uof.for.year %>% filter(Individual.sex == 'F') %>% 
       group_by(Force.type) %>% 
       summarise(count = n())
bar.labels <- bar.data %>% pull(count)
bar.categories <- bar.data %>% pull(Force.type)

annotations <- list(x = bar.categories, y = bar.labels, text = bar.labels, xanchor = 'center',
              yanchor = 'bottom',
              showarrow = FALSE)


p.female.victim.uof.by.type <- plot_ly(uof.count.by.type, 
                                       x = ~Force.type, y = ~count, 
                                       type = 'bar',  
                                       name = ~Individual.race, 
                                       color = ~Individual.race) %>%
  
  layout(xaxis = list(categoryorder = "array",
                        categoryarray = bar.categories,
                        title = F, 
                        showgrid = F, 
                        ticktext = bar.categories, 
                        tickvals = bar.categories,
                        tickmode = "array"), 
         yaxis = list(title = 'Number UOF'), 
         barmode = 'stack',
         hovermode = 'compare',
         margin = list(b = 150)) %>%
  
  layout(annotations = annotations)

p.female.victim.uof.by.type
gen.plotly.json(p.female.victim.uof.by.type, "uof-by-public-female-type-race")
