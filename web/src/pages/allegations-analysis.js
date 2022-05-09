import React from "react"
import { Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"

// Allegations
import AllegationsMostCommonPlot from '../components/complaints/allegations-most-common-plot'
import AllegationsByFindingPlot from '../components/complaints/outcome/allegations-by-finding-plot'
import AllegationsSustainedMostCommonPlot from '../components/complaints/outcome/allegations-sustained-most-common-plot'
import AllegationsBySourcePlot from '../components/complaints/source/allegations-by-source-plot'


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

	renderAllegationsOutcomes() {
		return (
			<div id="allegations-outcomes">
				<Row>
					<Col>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 4: MOST COMMON ALLEGATIONS</h5>
						<AllegationsMostCommonPlot />
						<h4>Allegation Analysis</h4>
					</Col>
				</Row>

				<Row>
					<Col>
						<h5 className="text-center">FIGURE 5: NOPD ALLEGATION FINDINGS</h5>
						<AllegationsByFindingPlot />

						<h5 className="text-center">FIGURE 6: MOST SUSTAINED ALLEGATIONS</h5>
						<AllegationsSustainedMostCommonPlot />
						<p>These totals are based on sustained allegations only.</p>

						<h5 className="text-center">FIGURE 7: ALLEGATIONS BY SOURCE</h5>
						<AllegationsBySourcePlot />
					</Col>
				</Row>

			</div>
		)
	}

	render() {
		return (
			<Page
				title={"Allegation analysis"}
				nav={this.renderNav()}
				body={
					<div>
						<Row>
							<Col>
								<h1 className="mt-5 text-center">2021 Annual Report</h1>
								<h2 className="mb-5 text-center">Complaints,Commendations &amp; Disciplinary Proceedings</h2>
							</Col>
						</Row>

						{this.renderAllegationsOutcomes()}

						<Row className="text-center">
							<Col className="py-5">
                            <a href="/complaints" className="text-white"><Button size="lg" color="secondary" className="mx-3 my-2">&lt; Complaints and allegations by year</Button></a>
                            <a href="/complaints-analysis" className="text-white"><Button size="lg" color="success" className="my-2">Next: Complaints analysis ></Button></a>
							</Col>
						</Row>
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
