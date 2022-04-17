check.vars(c("uof.for.year"))
title <- "UOF by diposition"

########################################################################################################
########################################################################################################
disposition.for.year <- uof.for.year %>% distinct(FIT.Number, Disposition)

normalized.dispositions <- disposition.for.year %>% mutate(
  Disposition = case_when(
    Disposition == "UOF Justified" ~ "Authorized",
    Disposition == "UOF Justified With Policy Violation" ~ "Authorized",
    Disposition == "UOF Justified With Training" ~ "Authorized",
    Disposition == "Cancel FIT FTN" ~ "No force used",
    Disposition == "UOF Complaint of Injury/No Reportable Force Used" ~ "No force used",
    Disposition == "UOF No Reportable Force Used by Officer" ~ "No force used",
    Disposition == "NULL" ~ "Invalid data",
    Disposition == "" ~ "Invalid data",
    TRUE ~ Disposition
  )
)

ftn.by.disposition <- normalized.dispositions %>% group_by(Disposition)
disposition.counts <- summarise(ftn.by.disposition, count = n())

p.uof.by.disposition <- plot_ly(disposition.counts, 
                                x = ~Disposition, 
                                y = ~count, 
                                text = ~count,
                                textposition = 'outside',
                                type = "bar") 
p.uof.by.disposition
gen.plotly.json(p.uof.by.disposition, "uof-by-disposition")
