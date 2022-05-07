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
                        <h1>MISSING ADP DATA</h1>
						<h5 className="text-center">FIGURE 20: AVERAGE FTN AND UOF PER OFFICER</h5>
<ul>
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
						<h5 className="text-center">FIGURE 21: OFFICERS WHO USE THE MOST FORCE</h5>
						<ul>
							<li>How to read the graph: The vertical axis is percentage and horizontal axis is number of officers. The graph is cumulative, meaning that the top 10 officers includes the top 5 officers. </li>
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
						<Col><h2 id="most-forceful-section">Section V: OFFICERS THAT USE THE MOST FORCE</h2></Col>
				</Row>

				{this.renderForcePerOfficer()}
				{this.renderForceCdfOfficers()}
				{/* <MostForcefulDetails /> */}
			</div>
		)
	}
}

export default MostForcefulSection
