check.vars(c("CURRENT.YEAR", "complaints.for.year"))

########################################################################################################
########################################################################################################

dispositions.for.year <- complaints.for.year %>% group_by(Disposition.OIPM)
count.dispositions.for.year <- summarise(dispositions.for.year, num.complaints = n())
count.dispositions.for.year <- count.dispositions.for.year %>% mutate(
  color = case_when(
    Disposition.OIPM == "DI-2" ~ "red",
    Disposition.OIPM == "Unfounded" ~ "blue",
    Disposition.OIPM == "NFIM" ~ "orange",
    Disposition.OIPM == "Sustained" ~ "pink",
    Disposition.OIPM == "Not Sustained" ~ "green",
    Disposition.OIPM == "Exonerated" ~ "black",
    Disposition.OIPM == "Mediation" ~ "cyan",
    Disposition.OIPM == "Pending" ~ "magenta",
    TRUE ~ "yellow"
  )
)

title <- "Disposition of all complaints"
p.complaint.by.outcome <- plot_ly(count.dispositions.for.year,  type = 'pie',
                                  labels = ~Disposition.OIPM, 
                                  values = ~num.complaints,
                                  marker = list(colors = ~color),
                                  textposition = 'middle center',
                                  textinfo = 'label+value+percent',
                                  insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(hovermode = "compare", showlegend = T)

p.complaint.by.outcome
gen.plotly.json(p.complaint.by.outcome, "complaints-by-disposition")
