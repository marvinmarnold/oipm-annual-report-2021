import React from "react"
import { Row, Col } from 'reactstrap'

// import ForcePerOfficerPlot from './force-per-officer-plot'
import ForceCdfOfficersPlot from './force-cdf-officers-plot'
// import MostForcefulDetails from './most-forceful-details'

class MostForcefulSection extends React.Component {
	constructor() {
		super()
	}

	renderForcePerOfficer() {
		return (
			<div>
				<Row>
					<Col>
						{/* <ForcePerOfficerPlot /> */}
						<h5 className="text-center">FIGURE 21: AVERAGE FTN AND UOF PER OFFICER</h5>
<ul>
							<li>The average UOF data from 2018 has decreased since 2017 and 2016.</li>
							<li>The average officer will use force once every 3 years. In 2017, the average officer
used force once every 2 years. Another way to think about this is that in 2018, the
average force incidents (FTN) per officer was 0.33 but was 0.47 in 2017.</li>
							<li>If only the officers that used force at least once are considered, the average officer
then has 1.11 force incidents per year.</li>
						</ul>
					</Col>
				</Row>
			</div>
		)
	}

	renderForceCdfOfficers() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Number of Officer and How Much Force They Use</h4>
						<ForceCdfOfficersPlot />
						<h5 className="text-center">FIGURE 22: OFFICERS WHO USE THE MOST FORCE</h5>
						<ul>
							<li>How to read the graph: The vertical axis is percentage and horizontal axis is number of officers. The graph is cumulative, meaning that the top 10 officers includes the top 5 officers. </li>
							<li>The top 10 officers are responsible for a little over 11% of all force incidents
(FTN) in 2018, up from 10.3% in 2017.</li>
							<li>The top 10 officers are responsible for just over 14% of all force (UOF) in 2018.
This is a small increase from 13.4% in 2017.</li>
							<li>About the same number of officers used force in 2018 as in 2017.</li>
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
						<Col><h2 id="most-forceful-section">Section VI: OFFICERS THAT USE THE MOST FORCE</h2></Col>
				</Row>

				{this.renderForcePerOfficer()}
				{this.renderForceCdfOfficers()}
				{/* <MostForcefulDetails /> */}
				<p>OIPM was not able to provide the divisions and districts corresponding to these
officers. In the 2017 report, we found that many of the officers that use the most force
are in divisions like Special Operations that are put into more interactions where force
is used. Different districts also have different patterns of criminal activity that could
effect policing.</p>
			</div>
		)
	}
}

export default MostForcefulSection
