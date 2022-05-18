check.vars(c("uof.for.analysis", "stops.for.analysis", "bookings.for.analysis"))
#check.vars(c("uof.for.year", "bookings.for.year", "stops.for.year"))
title <- paste("Force, Bookings, & Stops of black people by month in", CURRENT.YEAR)

########################################################################################################
########################################################################################################
# By month

# White alone, percent	33.4%
# Black or African American alone, percent(a)	59.2%
# American Indian and Alaska Native alone, percent(a)	0.2%
# Asian alone, percent(a)	2.9%
# Native Hawaiian and Other Pacific Islander alone, percent(a)	0.0%
# Two or More Races, percent	2.6%
# Hispanic or Latino, percent(b)	5.5%
# White alone, not Hispanic or Latino, percent	30.7%

# Group by month and race
uof.by.month <- uof.for.analysis %>% group_by(month.long, Individual.race)
bookings.by.month <- bookings.for.analysis %>% group_by(month.long, race)
stops.by.month <- stops.for.analysis %>% group_by(month.long, race)

count.uof.by.month <- uof.by.month %>% summarise(count = n())
count.bookings.by.month <- bookings.by.month %>% summarise(count = n())
count.stops.by.month <- stops.by.month %>% summarise(count = n())

# Count totals for each group
total.uof.by.month <- count.uof.by.month %>% group_by(month.long) %>% summarise(total = sum(count))
total.bookings.by.month <- count.bookings.by.month %>% group_by(month.long) %>% summarise(total = sum(count))
total.stops.by.month <- count.stops.by.month %>% group_by(month.long) %>% summarise(total = sum(count))

# Add total to every row
count.uof.by.month <- merge(count.uof.by.month, total.uof.by.month, by = "month.long")
count.bookings.by.month <- merge(count.bookings.by.month, total.bookings.by.month, by = "month.long")
count.stops.by.month <- merge(count.stops.by.month, total.stops.by.month, by = "month.long")

# Add percentage of each subgroup of group
count.uof.by.month <- count.uof.by.month %>% mutate(
  pct = count / total * 100
)
count.bookings.by.month <- count.bookings.by.month %>% mutate(
  pct = count / total * 100
)
count.stops.by.month <- count.stops.by.month %>% mutate(
  pct = count / total * 100
)

# Get data for black people
black.uof.by.month <- count.uof.by.month %>% filter(Individual.race == black)
black.bookings.by.month <- count.bookings.by.month %>% filter(race == black)
black.stops.by.month <- count.stops.by.month %>% filter(race == black)

# Put it all together
black.by.month <- data.frame(
  month = black.uof.by.month$month.long,
  #month = months.abbr,
  uof = black.uof.by.month$pct,
  bookings = black.bookings.by.month$pct,
  stops = black.stops.by.month$pct
)

months <- black.by.month %>% arrange(month) %>% pull(month)

p.black.by.month <- plot_ly(black.by.month, 
                            x = ~month, 
                            y = ~uof, name = 'Use of Force', type = 'scatter', 
                            mode = 'lines+markers', 
                            line = list(color = 'rgb(22, 96, 167)', width = 2, dash = 'solid')) %>%
  
  add_trace(y = ~bookings, name = 'Bookings / Arrests', 
            mode = 'lines+markers',
            line = list(color = 'rgb(205, 12, 24)', width = 2, dash = 'solid')) %>%
  
  add_trace(y = ~stops, name = 'Stops & Searches', 
            mode = 'lines+markers',
            line = list(color = 'rgb(0, 255, 24)', width = 2, dash = 'solid')) %>%
  
#   # Add horizontal line showing black pop in new orleans
#   add_segments(name = "Black population of NO",
#                x = 0, xend = length(months), 
#                y = 61, yend = 61, 
#                line = list(color = 'rgb(229, 221, 59)', dash = 'solid')) %>%
  
  layout(title = FALSE, 
         margin = list(b = -1.5),
         legend = list(x = 0, y = -.3),
        #  xaxis = list(categoryorder = "array",
        #                 categoryarray = months,
        #                 title = 'Month',
        #                 showgrid = F,
        #                 ticktext = months,
        #                 tickvals = months,
        #                 tickmode = "array"),
         yaxis = list(title = 'Percent against black people', range = c(0, 100))
  )
nrow(months)
p.black.by.month
gen.plotly.json(p.black.by.month, "black-disparities-by-month")

