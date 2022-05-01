import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import DisciplineByActionTakenPlot from './discipline-by-action-taken-plot'
import DisciplineByAllegationPlot from './discipline-by-allegation-plot'
import DisciplineByPublicSexPlot from './discipline-by-public-sex-plot'
import DisciplineByOfficerSexPlot from './discipline-by-officer-sex-plot'
import DisciplineByPublicRacePlot from './discipline-by-public-race-plot'
import DisciplineByOfficerRacePlot from './discipline-by-officer-race-plot'

class ComplaintsDisciplineSection extends React.Component {
	constructor() {
		super()
	}

	renderActionsTaken() {
		return (
			<div className="my-3">
				<Row>
					<Col lg="6">
						<h4>Types of discipline</h4>

						<ul>
							<li>There were roughly 20 types of disciplinary infractions alleged of NOPD officers in 2018. The top three were “neglect of duty,” “instructions from an authoritative source,” and “professionalism.” This remains in keeping with trends from 2017.</li>
							<li>In 2018, the most common forms of discipline were “letter of reprimand” and “suspension.” However, in 2017 the most common forms of discipline were “suspension” and “DI-2.” </li>
						</ul>
					</Col>
					<Col lg="6">
						<DisciplineByActionTakenPlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<DisciplineByAllegationPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderBySex() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Discipline by gender</h4>

						<ul>
							<li>There were roughly 20 types of disciplinary infractions alleged of NOPD officers in 2018. The top three were “neglect of duty,” “instructions from an authoritative source,” and “professionalism.” This remains in keeping with trends from 2017.</li>
							<li>In 2018, the most common forms of discipline were “letter of reprimand” and “suspension.” However, in 2017 the most common forms of discipline were “suspension” and “DI-2.” </li>
							<li>Officers of both genders are most likely to receive “no discipline,” a “letter of reprimand,” or “suspension.” However, male officers appear to be overrepresented in “mediation” and “oral reprimand” discipline outcomes.</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col lg="6">
						<h6>By resident gender</h6>
						<DisciplineByPublicSexPlot />
					</Col>
					<Col lg="6">
						<h6>By officer gender</h6>
						<DisciplineByOfficerSexPlot />
					</Col>
				</Row>
			</div>
		)
	}

	renderByRace() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Discipline by race</h4>

						<h6>By complainant's race</h6>
						<Row>
							<Col lg="6">
								<ul>
									<li>The majority of complainants are “Black” or “Unknown Race.” Hispanic complainants are least represented across disciplinary outcomes.</li>
									<li>Based on figures from other major cities, data indicates the Black complainants are most frequent <a href="#ref-6-black-complaints">[6]</a>. This could speak to overwhelming outcry from Black communities that they are unfairly and unlawfully targeted by police. NOPD complainant numbers indicate that it may be doing no better than other departments to remedy this situation. </li>
									<li>Numbers seem to indicate that, if a complainant is white, an officer is statistically more likely to be disciplined.</li>
								</ul>

								<p id="ref-6-black-complaints">[6] - <a href="https://cpdp.co">Citizen Police Data Project</a>, accessed April 9, 2019.</p>

								<p>[6] - Government of the District of Colombia, Police Complaints Board, Office of Police Complaints, <a href="https://policecomplaints.dc.gov/node/1366436">Annual Report 2018, pg. 13</a>, accessed April 9, 2019.</p>
							</Col>
							<Col lg="6">
								<DisciplineByPublicRacePlot />

							</Col>
						</Row>


						<Row>
							<Col lg="6">
								<h6>By officer's race</h6>
								<ul>
									<li>Regardless of race, officers are most likely to receive no disciplinary action.</li>
									<li>Like other police departments analyzed, officer race generally corresponds with department demographics <a href="#ref-7-officer-race">[7]</a>. However, only Black officers have received a demotion as a form of discipline. Black officers are also disproportionately likely to be dismissed. This may indicate subtle racial bias within discipline in the department itself, which begs the question: if officer actions indicate racial bias amongst colleagues, what type of bias exists with officers in the community?</li>
								</ul>

								<p id="ref-7-officer-race">[5] - Chicago Police Department, Chicago Police Department <a href="https://home.chicagopolice.org/wp-content/uploads/2019/03/Chicago-Police-Department-Annual-Report-2017.pdf">Annual Report 2017, p. 24</a>, accessed April 9, 2019.</p>
							</Col>
							<Col lg="6">
								<DisciplineByOfficerRacePlot />
							</Col>
						</Row>

					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="complaints-discipline-section">Discipline</h2></Col>
				</Row>

				{this.renderActionsTaken()}
				{this.renderBySex()}
				{this.renderByRace()}
			</div>
		)
	}
}

export default ComplaintsDisciplineSection
