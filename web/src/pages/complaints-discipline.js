import React from "react"
import { Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"

// Discipline
import DisciplineByActionTakenAllPlot from '../components/complaints/discipline/discipline-by-action-taken-all-plot'
import DisciplineByAllegationPlot from '../components/complaints/discipline/discipline-by-allegation-plot'
import DisciplineByPublicSexPlot from '../components/complaints/discipline/discipline-by-public-sex-plot'
import DisciplineByOfficerSexPlot from '../components/complaints/discipline/discipline-by-officer-sex-plot'
import DisciplineByPublicRacePlot from '../components/complaints/discipline/discipline-by-public-race-plot'
import DisciplineByOfficerRacePlot from '../components/complaints/discipline/discipline-by-officer-race-plot'

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


	renderDiscipline() {
		return (
			<div id="complaints-anonymous">
				<Row>
					<Col>
						<h4>Discipline Data</h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 16: ACTION TAKEN</h5>
						<DisciplineByActionTakenAllPlot />

						<h5 className="text-center">FIGURE 17: OUTCOMES</h5>
						<DisciplineByAllegationPlot />

						<h5 className="text-center">FIGURE 18: DISCIPLINE BY COMPLAINANT GENDER</h5>
						<DisciplineByPublicSexPlot />

						<h5 className="text-center">FIGURE 19: OUTCOMES BY OFFICER GENDER</h5>
						<DisciplineByOfficerSexPlot />

						<h5 className="text-center">FIGURE 20: OUTCOME BY COMPLAINANT RACE</h5>
						<DisciplineByPublicRacePlot />

						<h5 className="text-center">FIGURE 21: DISCIPLINE BY OFFICER RACE</h5>
						<DisciplineByOfficerRacePlot />
					</Col>

				</Row>

			</div>
		)
	}

	render() {
		return (
			<Page
				title={"Discipline"}
				nav={this.renderNav()}
				body={
					<div>
						<Row>
							<Col>
								<h1 className="mt-5 text-center">2021 Annual Report</h1>
								<h2 className="mb-5 text-center">Complaints, Commendations &amp; Disciplinary Proceedings</h2>
							</Col>
						</Row>

						{this.renderDiscipline()}

						<Row className="text-center">
							<Col className="py-5">
							<a href="/complaints-anonymous" className="text-white"><Button size="lg" color="secondary" className="mx-3 my-2">&lt; Previous: Anonymous complaints</Button></a>
							</Col>
						</Row>
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
