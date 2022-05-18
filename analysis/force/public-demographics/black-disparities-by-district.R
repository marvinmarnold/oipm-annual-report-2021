#check.vars(c("uof.for.year", "bookings.for.year", "stops.for.year", "districts.by.race"))
check.vars(c("uof.for.year", "stops.for.year", "districts.by.race"))
title <- paste("Force, Bookings, & Stops of Black people by month in", CURRENT.YEAR)

########################################################################################################
########################################################################################################

# By district

# Group by month and race
uof.by.district <- uof.for.year %>% filter(District.or.division %in% districts) %>% group_by(District.or.division, Individual.race)


#bookings.by.district <- charges.for.year %>% 
#  select(Folder.number, Race, Arrest.district) %>% 
#  filter(Arrest.district %in% 1:8) %>%
#  distinct %>% 
#  group_by(Arrest.district, Race)

stops.by.district <- stops.for.year %>% group_by(District, race)

# Count items in each group
count.uof.by.district <- uof.by.district %>% summarise(count = n())
#count.bookings.by.district <- bookings.by.district %>% summarise(count = n())
count.stops.by.district <- stops.by.district %>% summarise(count = n())

# Count totals for each group
total.uof.by.district <- count.uof.by.district %>% group_by(District.or.division) %>% summarise(total = sum(count))
#total.bookings.by.district <- count.bookings.by.district %>% group_by(Arrest.district) %>% summarise(total = sum(count))
total.stops.by.district <- count.stops.by.district %>% group_by(District) %>% summarise(total = sum(count))

# Add total to every row
count.uof.by.district <- merge(count.uof.by.district, total.uof.by.district, by = "District.or.division")
#count.bookings.by.district <- merge(count.bookings.by.district, total.bookings.by.district, by = "Arrest.district")
count.stops.by.district <- merge(count.stops.by.district, total.stops.by.district, by = "District")

# Add percentage of each subgroup of group
count.uof.by.district <- count.uof.by.district %>% mutate(
  pct = count / total * 100
)
#count.bookings.by.district <- count.bookings.by.district %>% mutate(
#  pct = count / total * 100
#)
count.stops.by.district <- count.stops.by.district %>% mutate(
  pct = count / total * 100
)

# Get data for black people
black.uof.by.district <- count.uof.by.district %>% filter(Individual.race == black) %>% mutate(
  district = substring(District.or.division, 1, 3)
)
#black.bookings.by.district <- count.bookings.by.district %>% filter(Race == black)
black.stops.by.district <- count.stops.by.district %>% filter(race == black)
pct.black.by.district <- districts.by.race %>% filter(race == black)

# Put it all together
black.by.district <- data.frame(
  population = pct.black.by.district$pct.race.in.district,
  district = black.uof.by.district$district,
  uof = black.uof.by.district$pct,
  #bookings = black.bookings.by.district$pct,
  stops = black.stops.by.district$pct
)

p.black.by.district <- plot_ly(black.by.district, 
                               x = ~district, 
                               y = ~uof, 
                               type = 'bar', 
                               name = "% force against black ppl by district") %>%
  
  add_trace(y = ~stops, name = "% stops are of black ppl by district") %>%
  
  #add_trace(y = ~bookings, name = "% bookings are of black ppl by district") %>%
  
#   add_trace(y = ~uof, name = "% force against black ppl by district") %>%
  
  layout(
    margin = list(b = 150),
    xaxis = list(
      categoryorder = "array",
      categoryarray = districts,
      title = "District"
    ),
    legend = list(x = 0, y = -.3),
    hovermode = 'compare',
    yaxis = list(title = 'Percent black', dtick = 10), 
    barmode = 'group')

p.black.by.district
gen.plotly.json(p.black.by.district, "black-disparities-by-district")


