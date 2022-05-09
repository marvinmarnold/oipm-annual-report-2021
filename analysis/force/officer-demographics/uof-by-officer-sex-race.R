check.vars(c("uof.for.year"))
title <- "Force by officer sex and race"

########################################################################################################
########################################################################################################
uof.by.sex <- uof.for.year %>% group_by(Officer.sex, Officer.race)
count.by.sex.race <- summarize(uof.by.sex, num.uof = n())

bar.data <- uof.for.year %>% 
       group_by(Officer.sex) %>% 
       summarise(count = n())
bar.labels <- bar.data %>% pull(count)
bar.categories <- bar.data %>% pull(Officer.sex)

sexes <- bar.categories 
annotations <- list(x = sexes, y = bar.labels, text = bar.labels, xanchor = 'center',
              yanchor = 'bottom',
              showarrow = FALSE)

p.uof.by.officer.sex.race <- plot_ly(count.by.sex.race, 
                                     x = ~Officer.sex, y = ~num.uof, 
                                     type = 'bar',  
                                     name = ~Officer.race, 
                                     color = ~Officer.race) %>%
  
  layout(xaxis = list(categoryorder = "array",
                        categoryarray = sexes,
                        title = F, 
                        showgrid = F, 
                        ticktext = sexes, 
                        tickvals = sexes,
                        tickmode = "sexes"),
         yaxis = list(title = 'Amount of force (UOF)'), 
         barmode = 'stack',
         legend = list(x = 0, y = -.50),
         hovermode = 'compare') %>%
  
  layout(annotations = annotations)

p.uof.by.officer.sex.race
gen.plotly.json(p.uof.by.officer.sex.race, "uof-by-officer-sex-race")
