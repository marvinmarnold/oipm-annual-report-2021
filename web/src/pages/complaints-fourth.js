import React from "react"
import { Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"

// Fourth
import AllegationsFourthByDescriptionPlot from '../components/complaints/fourth/allegations-fourth-by-description-plot'
import AllegationsFourthByDescriptionFindingPlot from '../components/complaints/fourth/allegations-fourth-by-description-finding-plot'


class ComplaintsHighlightsPage extends React.Component {
  constructor() {
    super()
    this.state = { }
  }

	renderNav() {
		return (
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="/complaints-highlights" className="text-white">Complaints and allegations by year</NavLink>
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

	renderFourth() {
		return (
			<div id="complaints-fourth">
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 13: FOURTH AMENDMENT COMPLAINTS</h5>
						<AllegationsFourthByDescriptionPlot />

						<h5 className="text-center">FIGURE 14: FOURTH AMENDMENT ALLEGATIONS BY OUTCOME</h5>
						<AllegationsFourthByDescriptionFindingPlot />
					</Col>
				</Row>
			</div>

		)
	}

	render() {
		return (
			<Page
				title={"4th amendment complaints"}
				nav={this.renderNav()}
				body={
					<div>
						<Row>
							<Col>
								<h1 className="mt-5 text-center">2021 Annual Report</h1>
								<h2 className="mb-5 text-center">Complaints, Commendations &amp; Disciplinary Proceedings</h2>
							</Col>
						</Row>

						{this.renderFourth()}

						<Row className="text-center">
							<Col className="py-5">
								<Button size="lg" color="secondary" className="mx-3 my-2"><a href="/complaints-analysis" className="text-white">&lt; Previous: Complaints analysis</a></Button>
								<Button size="lg" color="success" className="my-2"><a href="/complaints-anonymous" className="text-white">Next: Anonymous complaints ></a></Button>
							</Col>
						</Row>
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
