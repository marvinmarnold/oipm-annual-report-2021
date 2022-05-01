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


xs <- c("Public Initiated", "Public Initiated", "Public Initiated", "Rank Initiated", "Rank Initiated", "Rank Initiated")
ys <- c(26, 355, 425, 1, 100, 254)
vals <- c(26, 329, 70, 1, 99, 154)

annotations <- list(x = xs, y = ys, text = vals, xanchor = 'center',
                    yanchor = 'top',
                    showarrow = FALSE)

p.complaints.by.rank.disposition <- plot_ly(count.by.rank.disposition, 
                                            x = ~Incident.type, 
                                            y = ~num.complaints, 
                                            type = 'bar',  name = ~disposition.simple, 
                                            color = ~disposition.simple) %>%
  
  layout(xaxis = list(title = "Type of complaint", 
                      showgrid = F), 
         yaxis = list(title = 'Number complaints'), 
         barmode = 'stack',
         hovermode = 'compare', 
         margin = list(r = 100, b = 100))

  
#  layout(annotations = annotations)

p.complaints.by.rank.disposition
gen.plotly.json(p.complaints.by.rank.disposition, "complaints-by-source-disposition")
