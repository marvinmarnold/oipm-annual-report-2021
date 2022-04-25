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
						<p>In 2018, there were roughly 20 types of allegations alleged against NOPD employees. The top three were
“neglect of duty,” “instructions from an authoritative source,” and “professionalism.” This remains in step
with trends from 2017. In 2018, the most common outcomes were letter of reprimand and suspension. In
2017 the most common outcomes were DI-2 and suspensions.</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="text-center">FIGURE 16: ACTION TAKEN</h5>
						<DisciplineByActionTakenAllPlot />
						<p>In chart above (Figure 16) are all the outcomes of allegations brought against NOPD employees. Some of
these outcomes are disciplinary and others, like mediation and Resigned / Retired Under Investigation (RUI),
are not disciplinary actions. “No basis for discipline” encompasses allegations that are found to be
unfounded, exonerated, and not sustained. This means the NOPD conducted an investigation and determined
these allegations were not eligible for disciplinary actions.</p>

						<h5 className="text-center">FIGURE 17: OUTCOMES</h5>
						<DisciplineByAllegationPlot />
						<p>This chart (Figure 17) captures the outcomes of disciplinary investigations. Some outcomes are disciplinary
actions and some are not disciplinary actions, like mediation and Resigned / Retired Under Investigation
(RUI). This chart differs from Figure 16 because Figure 16 includes all outcomes, even those that had no
basis for disciplinary action.</p>

						<h5 className="text-center">FIGURE 18: DISCIPLINE BY COMPLAINANT GENDER</h5>
						<DisciplineByPublicSexPlot />
						<p>Males, females, and people of unknown gender were proportionally represented as sources of complaints.
Their disciplinary outcomes are similar except for DI-2, letter of reprimand, and suspension which are
disproportionately from complainants of unknown gender. Most likely, this is because those outcomes are
the result of rank-initiated complaints and if rank-initiated, the NOPD database does not capture the rank’s
gender.</p>

						<h5 className="text-center">FIGURE 19: OUTCOMES BY OFFICER GENDER</h5>
						<DisciplineByOfficerSexPlot />
						<p>Outcomes appear to be proportional to the gender breakdown of the NOPD. Males make up 76% of the
police department and are proportionally represented in most types of discipline and similarly, female
employees are also proportionally represented. There is a negligible number of complaints concerning an
officer with an unknown gender.</p>
						<p>According to the disciplinary matrix, many first offenses are initially resolved with letter reprimand or short
suspensions.</p>

						<h5 className="text-center">FIGURE 20: OUTCOME BY COMPLAINANT RACE</h5>
						<DisciplineByPublicRacePlot />
						<p>50.1% of complainants are categorized as Black / African American. This number is low relative to the
Black / African American population of New Orleans and the higher rates of involvement Black / African
American people experience with law enforcement. Hispanic and Asian complainants are least represented.
There are 19 Hispanic complainants (1.9% of all complaints) categorizations but Hispanic people are 5% of
the population. 2.9% of people in New Orleans are Asian but there were no complaints categorized as from
an Asian complainant. One reason for this pattern is that people of unknown race account for 59% of all
complaints.</p>
						<p>That said, disciplinary actions appear to be applied proportionally, regardless of the race of the complainant.
Further analysis is needed to determine if any more nuanced race base trends exist in subcategories of the
data.</p>

						<h5 className="text-center">FIGURE 21: DISCIPLINE BY OFFICER RACE</h5>
						<DisciplineByOfficerRacePlot />
						<p>Like other police departments analyzed, employee race generally corresponds with department
demographics. However, all officers receiving a demotion as a form of discipline were Black / African
American officers. Black / African American officers or employees are also disproportionately likely to be
dismissed. At this time, it is difficult to determine the cause of this pattern or if there is a pattern within the
NOPD data. OIPM would also like to continue to examine this trend with the NOPD in the coming year.</p>
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
								<h1 className="mt-5 text-center">2018 Annual Report</h1>
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
