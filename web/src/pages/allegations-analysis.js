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
						<p>Allegations are different from complaints. Within one complaint may be multiple allegations of misconduct.
According to NOPD data, the two most common complaint allegations in 2018, representing roughly 75% of
all allegations, were: “neglect of duty,” and “professionalism”. Similar to findings analyzed of other
departments, complaints tend to originate from civilian interactions.</p>
						<p>The dispositions of the complaints filed in 2018 are illustrated in the figure 4: “Most Common Allegations.”
This figure illustrates that the most common allegation of “Neglect of Duty” is also the allegation most
frequently marked “sustained”. This is consistent with 2017 findings.</p>
						<p>Complaint allegations have shifted slightly from 2017. While “neglect of duty” and “professionalism”
remained the most common allegations, the third most common switched from “instructions from an
authoritative source” in 2017 to “adherence to law” in 2018. While there was not a significant percentage
change in “adherence to law” allegations between 2017 and 2018, “instructions from an authoritative source”
allegations decreased by almost sixty (60) allegations, or over 3%.</p>
						<p>There was a disciplinary matrix change implemented in March of 2018, as a result, there was a policy shift to
more accurately determine the appropriate charge between neglect of duty and instructions from an
authoritative source. This resulted in a change in PIB practice resulting in more charges of neglect of duty in
2018.</p>
					</Col>
				</Row>

				<Row>
					<Col>
						<h5 className="text-center">FIGURE 5: NOPD ALLEGATION FINDINGS</h5>
						<AllegationsByFindingPlot />
						<p>In 2018, the most common sustained allegation is “neglect of duty” at 52%, mostly unchanged since 2017.</p>

						<h5 className="text-center">FIGURE 6: MOST SUSTAINED ALLEGATIONS</h5>
						<AllegationsSustainedMostCommonPlot />
						<p>These totals are based on sustained allegations only.</p>

						<h5 className="text-center">FIGURE 7: ALLEGATIONS BY SOURCE</h5>
						<AllegationsBySourcePlot />
						<p>This classification of each allegation is complimentary to and consistent with the Public vs Rank Initiated
classification that each allegation also receives. In 2018, 62% of allegations are classified as the public
initiated. Of the 62% of allegations made by the public, approximately 55.5% of those allegations were
classified as initiated by a civilian, which means a member of the public was the source of the complaint and
a member of the public submitted a complaint in person to a NOPD employee. Moving forward, the OIPM
and the NOPD is going to examine this public initiated category (type) to better identify the source of the
complaint. The goal is to better differentiate the data from website complaints, OIPM referrals, and civilian
complaints to confidently determine in the data what is coming from a public source.</p>
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
								<h1 className="mt-5 text-center">2018 Annual Report</h1>
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
