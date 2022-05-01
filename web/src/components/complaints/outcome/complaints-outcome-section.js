import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import AllegationsByFindingPlot from './allegations-by-finding-plot'
import ComplaintsByDispositionPlot from './complaints-by-disposition-plot'
import ComplaintsByPublicDispositionPlot from './complaints-by-public-disposition-plot'
import ComplaintsByRankDispositionPlot from './complaints-by-rank-disposition-plot'
import AllegationsSustainedMostCommonPlot from './allegations-sustained-most-common-plot'
import ComplaintsByOfficerRaceDispositionPlot from './complaints-by-officer-race-disposition-plot'

class ComplaintsTimeSection extends React.Component {
	constructor() {
		super()
	}

	renderAllegationsByFinding() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>NOPDs allegation findings</h4>

					</Col>
				</Row>
				<Row>
					<Col>
						<AllegationsByFindingPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderComplaintsByDisposition() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Complaint dispositions</h4>
						<Col>
						<ul>
							<li>The dispositions of the complaints filed in 2018 are illustrated in the figure “Individual Allegations by Outcome.” This figure illustrates that the most common allegation of “Neglect of Duty” is also the allegation most frequently marked “sustained”. This is consistent with 2017 findings.</li>
							<li>The largest number of complaints had an “inconsistent data”, meaning that there was conflicting information within the complaint, therefore yielding the outcome illegitimate. The next largest grouping was of “sustained” complaints at 18.7%. This represents a significant shift from 2017, as only 2.45% of complaints had an “inconsistent data” in 2017, as compared with 26% in 2018. Further, “sustained” complaints dropped from 29.2% in 2017 to 18.7% in 2018.</li>
							<li>While only 8.47% of citizen complaints are sustained, 35.7% of rank complaints are sustained, more than four times the percentage of citizen complaints.  In police departments across the US, citizen complaints often represent the majority of complaints but are the least often sustained <a href="#ref-3-public-complaints">[3]</a>. This could indicate that citizens more frequently submit false complaints, or more likely, that internal regulation bureaus have a vested interest in maintaining the status quo.</li>
							<li>In 2018, the most common sustained allegation is “neglect of duty” at 71%, up roughly 6% from 2017.</li>
						</ul>

						<p id="ref-3-public-complaints">[3] - Boulder Police Department, <a href="https://www-static.bouldercolorado.gov/docs/Professional_standards_report_Final3-26-1-201903261155.pdf">Professional Standards Report, p. 6</a>, accessed April 9, 2019.</p>
						</Col>
					</Col>
				</Row>

				<Row>
					<Col md="6">
						<h4>All complaints by outcome</h4>
						<ComplaintsByDispositionPlot />
					</Col>
					<Col md="6">
						<h4>Rank complaints by outcome</h4>
						<ComplaintsByRankDispositionPlot />
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<h4>Public complaints by outcome</h4>
						<ComplaintsByPublicDispositionPlot />
					</Col>
					<Col md="6">
						<h4>Most sustained allegations</h4>
						<AllegationsSustainedMostCommonPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderComplaintsByOfficerRaceDisposition() {
		return (
			<Row>
				<Col>
					<h4>Complaint outcomes by officer race</h4>
					<p>
						Sustained complaints appear to be consistent with officer race demographics. However, Black officers participate in mediation more than is consistent with overall demographics. This may indicate that Black officers have a greater inclination to reconcile with residents, as they are more likely to come from the same or similar neighborhoods as their complainants. This lends to the argument toward increased community policing.
					</p>
					<Col>
						<ComplaintsByOfficerRaceDispositionPlot />
					</Col>
				</Col>
			</Row>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-outcome-section">Outcome of complaints</h2></Col>
				</Row>

				{this.renderAllegationsByFinding()}
				{this.renderComplaintsByDisposition()}
				{this.renderComplaintsByOfficerRaceDisposition()}
			</div>
		)
	}
}

export default ComplaintsTimeSection
