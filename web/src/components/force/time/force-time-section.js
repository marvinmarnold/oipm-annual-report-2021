import React from "react"
import { Row, Col } from 'reactstrap'

import UofByYearPlot from './uof-by-year-plot'
import FtnByYearPlot from './ftn-by-year-plot'
import ForceByMonthPlot from './force-by-month-plot'

class ForceTimeSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByYear() {
		return (
			<div id="uof-year" className="my-3">
				<Row>
					<Col><h4>Annual Comparison - Amount of Force (UOF) by Year</h4></Col>
				</Row>
				<Row>
					<Col>
						<UofByYearPlot />
						<h5 className="text-center">FIGURE 3: TOTAL UOF BY YEAR</h5>

					</Col>
				</Row>
				<Row>
					<Col>
						<ul>
							<li>There were 1123 UOF in 2018, down significantly from 1574 in 2017. The number
							of FTN in 2018 was 441, resulting in a decrease of 163 since 2017 when there were
							604 incidents. The trend of UOF in other police departments surveyed was an
							increase in 2018.</li>
							<li>102 of the reduction in UOF may be attributed to the change of policy no longer
							requiring the reporting of exhibition of taser as a UOF, based on projections
							using 2016 and 2017 averages. This represents 22% in the decline of UOF. See
							narrative under Figure 5 for further explanation.</li>
							<li>Notably, even with the increase of UOF in other cities, the overall numbers for
							UOF per capita in New Orleans was substantially higher than other cities. For
							example, Indianapolis Police Department has 896 UOF and a population of
							863,000, and DC PD had 323 UOF with 694,000 residents.</li>
							<li>Data showed that UOF and FTN remained fairly consistent from 2013 to 2014.
							However, force spiked between 2014 and 2015. From 2015 to 2016, UOF
							increased while FTN decreased. In 2017, both FTN and UOF increased. Notably,
							both UOF and FTN experienced sharp declines in 2018.</li>
						</ul>
					</Col>

				</Row>
			</div>
		)
	}

	renderFtnByYear() {
		return (
			<div id="ftn-year" className="my-3">
				<Row>
					<Col><h4>Annual Comparison - Incidents Involving Force (FTN) by Year</h4></Col>
				</Row>
				<Row>
					<Col>
						<FtnByYearPlot />
						<h5 className="text-center">FIGURE 2: TOTAL FTN BY YEAR</h5>
					</Col>
				</Row>
				<Row>
					<Col>
						<ul>
							<li>Force in 2015 and earlier is taken from paper reports, not digital records.</li>
							<li>Data showed that UOF and FTN remained fairly consistent from 2013 to 2014.</li>
							However, force spiked between 2014 and 2015.
							<li>From 2015 to 2016, UOF increased while FTN decreased.</li>
							<li>In 2017, both FTN and UOF increased. Notably, both UOF and FTN experienced
							sharp declines in 2018.</li>
						</ul>
					</Col>
				</Row>
			</div>
		)
	}

	renderForceByMonth() {
		return (
			<div id="force-month" className="my-3">
				<Row>
					<Col><h4>FTN &amp; UOF in 2018 by Month</h4></Col>
				</Row>
				<Row>
					<Col>
						<ForceByMonthPlot />
						<h5 className="text-center">FIGURE 4: FTN &amp; UOF BY MONTH</h5>

					</Col>
				</Row>
				<Row>
					<Col className="my-4">
					<ul>	
						<li>Figure 4 clarifies the relationship between the number of incidents (FTN) and
						amount of force (UOF).</li>
						<li>On average, there has been a minor decrease in UOF per FTN per month from
						2017 to 2018 of 2.6 to approximately 2.5.</li>
						<li>In 2017 both UOF and FTN peaked during August. In 2018 UOF also reached its
						maximum in August, but the 2018 FTN max was July.</li>
						<li>April, May, June, and August were months when the UOF was substantially
						higher than the median of 82. The average of UOF/FTN was approximately 2.5
						in 2018, compared with 2.7 in 2017. Crime rates and force is known to rise during
						summer months 9 . This could explain the June and August outcomes. OIPM did
						not attempt to investigate the fluctuation in April and May further.</li>
					</ul>
					</Col>

				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
					<Col><h2 id="force-time-section">Section II: Force over time</h2></Col>
				</Row>

				{this.renderFtnByYear()}
				{this.renderUofByYear()}
				{this.renderForceByMonth()}
			</div>
		)
	}
}

export default ForceTimeSection
