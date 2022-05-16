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
						<h5 className="text-center">FIGURE 9: ALL COMPLAINTS BY OUTCOME</h5>
						<ComplaintsByDispositionPlot />

						<h5 className="text-center">FIGURE 10: RANK COMPLAINTS BY OUTCOME</h5>
						<ComplaintsByRankDispositionPlot />

						<h5 className="text-center">FIGURE 11: PUBLIC COMPLAINTS BY OUTCOME</h5>
						<ComplaintsByPublicDispositionPlot />

						<h5 className="text-center">FIGURE 12: COMPLAINT OUTCOMES BY OFFICER RACE</h5>
						<ComplaintsByOfficerRaceDispositionPlot />
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
								<h1 className="mt-5 text-center">2021 Annual Report</h1>
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
