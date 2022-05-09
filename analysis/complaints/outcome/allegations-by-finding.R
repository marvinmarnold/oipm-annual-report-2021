check.vars(c("CURRENT.YEAR", "allegations.for.year"))

allegations.by.finding <- allegations.for.year %>%
  group_by(Allegation.finding.simple, Allegation.1)

allegation.count.by.finding <- summarise(allegations.by.finding, num = n())


data.for.labels <- allegations.for.year %>%
    group_by(Allegation.finding.simple) %>%
    summarise(count = n())
bar.labels <- data.for.labels %>%
    pull(count)

findings <- data.for.labels %>%
    pull(Allegation.finding.simple)

annotations <- list(x = findings, y = bar.labels, text = bar.labels, xanchor = 'center',
                    yanchor = 'bottom',
                    showarrow = FALSE)

p.allegations.by.finding <- plot_ly(allegation.count.by.finding) %>%

  # Stacked bars by exp
  add_trace(x = ~Allegation.finding.simple,
            y = ~num,
            type = 'bar',
            name = ~Allegation.1,
            color = ~Allegation.1) %>%
  
  layout(barmode = 'stack',
         margin = list(b = 150),
         hovermode = 'compare',
        # legend = list(x = 0, y = -.75),

         xaxis = list(categoryorder = "array",
                        categoryarray = findings,
                        title = 'Allegation finding',
                        showgrid = F,
                        ticktext = findings,
                        tickvals = findings,
                        tickmode = "array"),

         yaxis = list(title = "Number of allegations", showgrid = T)) %>%
         layout(annotations = annotations)
  

p.allegations.by.finding
gen.plotly.json(p.allegations.by.finding, "allegations-by-finding")
