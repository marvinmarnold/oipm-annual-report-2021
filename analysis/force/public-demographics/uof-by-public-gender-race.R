check.vars(c("uof.for.year"))
title <- "Force by victim sex and race"

########################################################################################################
########################################################################################################
uof.by.sex <- uof.for.year %>% group_by(Individual.sex, Individual.race)
count.by.sex.race <- summarize(uof.by.sex, num.uof = n())

bar.data <- uof.for.year %>% 
       group_by(Individual.sex) %>% 
       summarise(count = n())
bar.labels <- bar.data %>% pull(count)
bar.categories <- bar.data %>% pull(Individual.sex)

annotations <- list(x = bar.categories, y = bar.labels, text = bar.labels, xanchor = 'center',
              yanchor = 'bottom',
              showarrow = FALSE)

p.uof.by.victim.sex.race <- plot_ly(count.by.sex.race, 
                                    x = ~Individual.sex, y = ~num.uof, 
                                    type = 'bar',  name = ~Individual.race, 
                                    color = ~Individual.race) %>%
  
  layout(xaxis = list(categoryorder = "array",
                        categoryarray = bar.categories,
                        title = F, 
                        showgrid = F, 
                        ticktext = bar.categories, 
                        tickvals = bar.categories,
                        tickmode = "array"), 
         yaxis = list(title = 'Amount of force (UOF)'), 
         barmode = 'stack',
         legend = list(x = 0, y = -.50),
         hovermode = 'compare') %>%
  
  layout(annotations = annotations)

p.uof.by.victim.sex.race
gen.plotly.json(p.uof.by.victim.sex.race, "uof-by-public-sex-race")
