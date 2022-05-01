import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import AllegationsFourthByDescriptionPlot from './allegations-fourth-by-description-plot'
import AllegationsFourthByDescriptionFindingPlot from './allegations-fourth-by-description-finding-plot'

class ComplaintsTimeSection extends React.Component {
	constructor() {
		super()
	}

	renderAllegations() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>NOPDs allegation findings</h4>

						<ul>
							<li>Search and seizure and handcuffing and restraint were the two high risk allegations the composed fourth amendment violations. Illegal search and seizure was more prevalent at 60%. There were 10 total fourth amendment violations in 2018. This is an improvement from 2017, where there were 45 total violations. While New Orleans is improving, and doing better than some other major police departments, like Chicago PD who experienced an increase <a href="#ref-5-fourth">[5]</a>, there should be no Fourth Amendment violations. This remains troubling for the NOPD, a department currently under consent decree.</li>
							<li>The outcomes of fourth amendment violations were relatively similar for both search and seizure and handcuffing and restraint. In both instances, the number of sustained complaints matches that of those exonerated. This is a slight deviation from 2017, when exonerations were nearly twice as likely as sustentions. These findings may indicate a greater accountability mechanism in the department.</li>
						</ul>

						<p id="ref-5-fourth">[5] - Chicago Police Department, Chicago Police Department <a href="https://home.chicagopolice.org/wp-content/uploads/2019/03/Chicago-Police-Department-Annual-Report-2017.pdf">Annual Report 2017, p. 28-29</a>, accessed April 9, 2019.</p>
					</Col>
				</Row>
				<Row>
					<Col lg="6">
					<ul>
						<AllegationsFourthByDescriptionPlot />
					</ul>
					</Col>
					<Col lg="6">
						<AllegationsFourthByDescriptionFindingPlot />
					</Col>
				</Row>
			</div>
		)
	}



	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-fourth-section">4th Amendment Complaints</h2></Col>
				</Row>

				{this.renderAllegations()}
			</div>
		)
	}
}

export default ComplaintsTimeSection
