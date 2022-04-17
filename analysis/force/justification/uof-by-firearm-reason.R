check.vars(c("uof.for.year"))
title <- "UOF by reason"

########################################################################################################
########################################################################################################
title <- "Reason for exhibiting firearm"

simplified.uof.by.reason <- uof.for.year %>% mutate(
  simple.reason = case_when(
    Reason.for.force == "Room CLearing" ~ "Tactical / clearing",
    Reason.for.force == "Room Clearing" ~ "Tactical / clearing",
    Reason.for.force == "Room clearing" ~ "Tactical / clearing",
    
    Reason.for.force == "Tactical Deployments" ~ "Tactical / clearing",
    Reason.for.force == "Weapon Exhibited" ~ "Weapon",
    Reason.for.force == "Possibly armed subject" ~ "Weapon",
    Reason.for.force == "Resisting Officer w/Weapon" ~ "Weapon",
    
    Reason.for.force == "Resisting Lawful Arrest" ~ "Resisting / escape",
    Reason.for.force == "Flight from an Officer" ~ "Resisting / escape",
    Reason.for.force == "Escape" ~ "Resisting / escape",
    
    Reason.for.force == "refuse verbal commands" ~ "Refusing commands",
    Reason.for.force == "Battery on Police Officer" ~ "Battery on officer",
    Reason.for.force == "Battery on Reporting Person" ~ "Battery on public",
    TRUE ~ Reason.for.force
  )
)

firearm.by.reason <- simplified.uof.by.reason %>% 
                      filter(Force.type == "Firearm Exhibited") %>% 
                      group_by(simple.reason)

count.by.firearm.reason <- summarise(firearm.by.reason, count = n())

p.firearm.by.reason <- plot_ly(count.by.firearm.reason,  type = 'pie', name = title,
                               labels = ~simple.reason, 
                               values = ~count,
                               textposition = 'inside',
                               textinfo = 'label+value+percent',
                               insidetextfont = list(color = '#FFFFFF'))
p.firearm.by.reason
gen.plotly.json(p.firearm.by.reason, "firearm-uof-by-reason")
