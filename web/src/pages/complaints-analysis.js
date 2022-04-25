import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"

// Complaints
import ComplaintsByDispositionPlot from '../components/complaints/outcome/complaints-by-disposition-plot'
import ComplaintsByPublicDispositionPlot from '../components/complaints/outcome/complaints-by-public-disposition-plot'
import ComplaintsByRankDispositionPlot from '../components/complaints/outcome/complaints-by-rank-disposition-plot'
import ComplaintsBySourceDispositionPlot from '../components/complaints/source/complaints-by-source-disposition-plot'
import ComplaintsByOfficerRaceDispositionPlot from '../components/complaints/outcome/complaints-by-officer-race-disposition-plot'

class ComplaintsHighlightsPage extends React.Component {
  constructor() {
    super()
    this.state = { }
  }

	renderNav() {
		return (
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="/complaints" className="text-white">Complaints and allegations by year</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/allegations-analysis" className="text-white">Allegation analysis</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/complaints-analysis" className="text-white">Complaint analysis</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/complaints-fourth" className="text-white">4th amendment complaints</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/complaints-anonymous" className="text-white">Anonymous complaints</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/complaints-discipline" className="text-white">Discipline</NavLink>
				</NavItem>
			</Nav>
		)
	}

	renderComplaintsOutcomes() {
		return (
			<div id="complaints-outcomes">
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 8: COMPLAINT DISPOSITION BY SOURCE</h5>

						<ComplaintsBySourceDispositionPlot />

						<h4>Complaint Analysis</h4>
						<p>The largest grouping was of “sustained” complaints at 29.3%. This is almost the identical rate from 2017
(29.2%).</p>
						<p>While 14.6% of public complaints are sustained (15.6% in 2017), 53.7% of rank complaints are sustained
(50.7% in 2017), this is more than three times the rate of public complaints. In New Orleans, the public initiates roughly 1.7 times the number of complaints than does rank. In police departments across the US,
public complaints often represent the majority of complaints but are the least often sustained.</p>
						<p>There are different conclusions that can be drawn from this trend. A rank-initiated complaint may and often
does originate from misconduct observed by a supervisor during a public interaction. At this time, the data
does not capture when a rank-initiated complaint originates from an observed act of misconduct during an
interaction with a member of the public.</p>
						<p>There is an argument that the number of sustained rank-initiated complaints is growing because there is an
increase of supervisor-based accountability. This means that rank is required under the Federal Consent
Decree to review officer action within the community, identify misconduct in those interactions, and then
initiate discipline against officers. When rank-initiates a complaint, limited investigation is required because
a supervisor observed the misconduct as it occurred or during his or her review the officer’s Body Worn
Camera.</p>
						<h5 className="text-center">FIGURE 9: ALL COMPLAINTS BY OUTCOME</h5>
						<ComplaintsByDispositionPlot />

						<h5 className="text-center">FIGURE 10: RANK COMPLAINTS BY OUTCOME</h5>
						<ComplaintsByRankDispositionPlot />

						<h5 className="text-center">FIGURE 11: PUBLIC COMPLAINTS BY OUTCOME</h5>
						<ComplaintsByPublicDispositionPlot />

						<h5 className="text-center">FIGURE 12: COMPLAINT OUTCOMES BY OFFICER RACE</h5>
						<ComplaintsByOfficerRaceDispositionPlot />
						<p>According to NOPD data (please refer to annual-report-2018.nola.ipm.gov), sustained complaints appear to
be consistent with officer race demographics. Officers classified as African American / Black have a higher
rate of participation in mediation. The OIPM cannot draw a definitive conclusion from this data but the
OIPM and NOPD would like to explore this trend in future reports.</p>
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<Page
				title={"Complaints analysis"}
				nav={this.renderNav()}
				body={
					<div>
						<Row>
							<Col>
								<h1 className="mt-5 text-center">2018 Annual Report</h1>
								<h2 className="mb-5 text-center">Complaints, Commendations &amp; Disciplinary Proceedings</h2>
							</Col>
						</Row>

						{this.renderComplaintsOutcomes()}

						<Row className="text-center">
							<Col className="py-5">
							<a href="/allegations-analysis" className="text-white"><Button size="lg" color="secondary" className="mx-3 my-2">&lt; Previous: Allegation analysis</Button></a>
							<a href="/complaints-fourth" className="text-white"><Button size="lg" color="success" className="my-2">Next: 4th amendment complaints ></Button></a>
							</Col>
						</Row>
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
