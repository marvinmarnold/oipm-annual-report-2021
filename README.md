# OIPM 2021 Annual Report

https://annual-report-2021.nolaipm.gov

## Data Sources

- NOPD complaints, use of force and offcer info: SQL queries to IAPro replica.
- Stops and Searches: Data dump from OPCD (911 center)
- Bookings (proxy for arrests): Data dump from OPSO (sheriff)

## Repo contents

- ***Data analysis:*** R scripts to take source data and tranform into Plotly compatible JSON. (`/analysis`)
- ***Report web version:*** Gatsby website that consumes JSON from data analysis.


## Website

- Develop locally: `gatsby develop`
- Deploy: `npm run deploy`

## R analysis

Dependencies

1. Install dependencies
```
install.packages("dplyr")
install.packages("plotly")
install.packages("plyr")
```

2. Execute analysis
```
cd analysis
cp .Renviron.example .Renviron
Rscript annual-report-2021.R
```

### Initial setup recreation

1. Setup Gatsby template
	```
	gatsby new gatsby-annual-report https://github.com/gatsbyjs/gatsby-starter-default
	```

2. Install dependencies
	```
	npm install bootstrap plotly plotly.js react-plotly.js reactstrap
	```

3. Import Bootstrap styles. Add this line to the top of `src/components/layout.js`
	```
	import 'bootstrap/dist/css/bootstrap.min.css';
	```


https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingNewSubdomain.html


### Notes

Missing because of ADP:
- https://annual-report-2018.nolaipm.gov/force-most/
- https://annual-report-2018.nolaipm.gov/force-officer/
