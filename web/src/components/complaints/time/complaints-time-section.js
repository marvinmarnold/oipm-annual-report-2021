import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import ComplaintsByYearTypePlot from './complaints-by-year-type-plot'
import AllegationsByYearTypePlot from './allegations-by-year-type-plot'

class ComplaintsTimeSection extends React.Component {
	constructor() {
		super()
	}

	renderByYear() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Annual trends</h4>

						<ul>
							<li>Complaints and allegations both appeared to have a slight decrease in 2018 compared with 2017. This appears to be on trend with other United States police departments of similar size, which are experiencing stagnation in complaints or decreases <a href="#ref-1-universal-decrease">[1]</a>. Given that complaint decreases are taking place in metropolitan police departments across the U.S., this may indicate a universal reform in policing over the past few years due to social pressure from politicians such as Barack Obama and catalysts such as the Movement for Black Lives.</li>
						</ul>

						<p id="ref-1-universal-decrease">[1] - Boulder Police Department, <a href="https://www-static.bouldercolorado.gov/docs/Professional_standards_report_Final3-26-1-201903261155.pdf">Professional Standards Report, p. 6</a>, accessed April 9, 2019.</p>
					</Col>
				</Row>
				<Row>
					<Col lg="6">
						<ComplaintsByYearTypePlot />
					</Col>
					<Col lg="6">
						<AllegationsByYearTypePlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-time-section">Complaints over time</h2></Col>
				</Row>

				{this.renderByYear()}
			</div>
		)
	}
}

export default ComplaintsTimeSection
