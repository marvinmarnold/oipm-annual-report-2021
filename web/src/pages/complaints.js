import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"

// Time
import ComplaintsByYearTypePlot from '../components/complaints/time/complaints-by-year-type-plot'
import AllegationsByYearTypePlot from '../components/complaints/time/allegations-by-year-type-plot'

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

	renderOverTime() {
		return (
			<div id="complaints-by-year">
				<Row>
					<Col>
						<h4>Complaints &amp; Allegations by Year</h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 2: COMPLAINTS BY YEAR</h5>

						<ComplaintsByYearTypePlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 3: ALLEGATIONS BY YEAR</h5>
						<AllegationsByYearTypePlot />

					</Col>

				</Row>
			</div>
		)
	}
	render() {
		return (
			<Page
				title={"Complaints and allegations by year"}
				nav={this.renderNav()}
				body={
					<div>
						<Row>
							<Col>
								<h1 className="mt-5 text-center">2021 Annual Report</h1>
								<h2 className="mb-5 text-center">Complaints, Commendations &amp; Disciplinary Proceedings</h2>
							</Col>
						</Row>

						{this.renderOverTime()}

						<Row className="text-center">
							<Col className="py-5">
                            <a href="/allegations-analysis" className="text-white"><Button size="lg" color="success" className="my-2">Next: Allegations analysis ></Button></a>
							</Col>
						</Row>
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
