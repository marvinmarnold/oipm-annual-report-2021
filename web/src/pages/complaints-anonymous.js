import React from "react"
import { Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"

// Anonymous
import ComplaintsByAnonymousPlot from '../components/complaints/source/complaints-by-anonymous-plot'

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

	renderAnonymous() {
		return (
			<div id="complaints-anonymous">
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 15: ANONYMOUS COMPLAINTS</h5>
						<ComplaintsByAnonymousPlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<Page
				title={"Anonymous complaints"}
				nav={this.renderNav()}
				body={
					<div>
						<Row>
							<Col>
								<h1 className="mt-5 text-center">2021 Annual Report</h1>
								<h2 className="mb-5 text-center">Complaints, Commendations &amp; Disciplinary Proceedings</h2>
							</Col>
						</Row>

						{this.renderAnonymous()}

						<Row className="text-center">
							<Col className="py-5">
							<a href="/complaints-fourth" className="text-white"><Button size="lg" color="secondary" className="mx-3 my-2">&lt; Previous: 4th amendment complaints</Button></a>
							<a href="/complaints-discipline" className="text-white"><Button size="lg" color="success" className="my-2">Next: Discipline ></Button></a>
							</Col>
						</Row>
					</div>
				}
			/>
		)
	}

}

export default ComplaintsHighlightsPage
