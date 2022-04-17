check.vars(c("uof.for.year"))
title <- "UOF by reason"

########################################################################################################
########################################################################################################
title <- "What preceeded force"

uof.by.service.type <- uof.for.year %>% group_by(Service.type)
count.by.service.type <- summarise(uof.by.service.type, count = n())

p.uof.by.service.type <- plot_ly(count.by.service.type,  type = 'pie', name = title,
                                 labels = ~Service.type, 
                                 values = ~count,
                                 textposition = 'inside',
                                 textinfo = 'label+value+percent',
                                 insidetextfont = list(color = '#FFFFFF'))
p.uof.by.service.type
gen.plotly.json(p.uof.by.service.type, "uof-by-preceding")
