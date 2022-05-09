check.vars(c("complaints.for.year"))

########################################################################################################
########################################################################################################
# total number of rank vs citizen and sustained
count.by.rank.disposition <- complaints.for.year %>% mutate(
  disposition.simple = case_when(
    Disposition.OIPM == "Sustained" ~ "Sustained",
    Disposition.OIPM == "Mediation" ~ "Mediation",
    TRUE ~ "Other"
  )
) %>%
  group_by(Incident.type, disposition.simple) %>% 
  summarise(num.complaints = n())

bar.data <- complaints.for.year %>% mutate(
  disposition.simple = case_when(
    Disposition.OIPM == "Sustained" ~ "Sustained",
    Disposition.OIPM == "Mediation" ~ "Mediation",
    TRUE ~ "Other"
  )
) %>%
  group_by(Incident.type) %>%
       summarise(count = n())

bar.labels <- bar.data %>% pull(count)
bar.categories <- bar.data %>% pull(Incident.type)

annotations <- list(x = bar.categories, y = bar.labels, text = bar.labels, xanchor = 'center',
              yanchor = 'bottom',
              showarrow = FALSE)

p.complaints.by.rank.disposition <- plot_ly(count.by.rank.disposition, 
                                            x = ~Incident.type, 
                                            y = ~num.complaints, 
                                            type = 'bar',  name = ~disposition.simple, 
                                            color = ~disposition.simple) %>%
  
  layout(xaxis = list(categoryorder = "array",
                        categoryarray = bar.categories,
                        title = F, 
                        showgrid = F, 
                        ticktext = bar.categories, 
                        tickvals = bar.categories,
                        tickmode = "array"), 
         yaxis = list(title = 'Number complaints'), 
         barmode = 'stack',
         hovermode = 'compare', 
         margin = list(r = 100, b = 100)) %>% layout(annotations = annotations)

p.complaints.by.rank.disposition
gen.plotly.json(p.complaints.by.rank.disposition, "complaints-by-source-disposition")
