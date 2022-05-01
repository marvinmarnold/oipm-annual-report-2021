import React from "react"
import { Row, Col } from 'reactstrap'

import UofByPublicSexRacePlot from './uof-by-public-sex-race-plot'
import UofByPublicFemaleRacePlot from './uof-by-public-female-race-plot'
import UofByPublicMaleRacePlot from './uof-by-public-male-race-plot'
import UofByPublicFemaleTypeRacePlot from './uof-by-public-female-type-race-plot'
import UofByPublicMaleTypeRacePlot from './uof-by-public-male-type-race-plot'
// import BlackDisparitiesByMonthPlot from './black-disparities-by-month-plot'
// import BlackDisparitiesByDistrictPlot from './black-disparities-by-district-plot'

class PublicDemographicsSection extends React.Component {
	constructor() {
		super()
	}

	renderUofBySexRace() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Use of Force by Individual Gender and Race</h4>
						<UofByPublicSexRacePlot />

					</Col>
				</Row>

				<Row>
					<Col>
                        <h6 className="text-center">Females</h6>
						<UofByPublicFemaleRacePlot />
					</Col>
					<Col>
                    <h6 className="text-center">Males</h6>
						<UofByPublicMaleRacePlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<ul>
							<li>Black men were approximately 6 times more likely to have UOF used against them than all other males.</li>
							 <li>Black females had 4 times more force used against them than all other women
combined.</li>
						</ul>
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByTypeSexRace() {
		return (
			<div>
				<Row>
					<Col>
						<h6>Female Individual UOF by Type and Race</h6>
						<UofByPublicFemaleTypeRacePlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>Male Individual UOF by Type and Race</h6>
						<UofByPublicMaleTypeRacePlot />
					</Col>
				</Row>
				<Row>
					<Col>
						<h4>Use of Force by Individual Gender and Race</h4>

						<ul>
							<li>Baton/pr-24 (strikes), defense tech/take-down, L2-taser, and take-down (w/
injury) were used exclusively on black females. Canine (no bite) was used
exclusively on white women.</li>
							<li>While white males made up all L4-taser UOF, black males experienced nearly all
other UOF at the highest rates across all force levels.</li>
							<li>Therefore, UOF by type and race is strikingly similar to 2017, however firearm
exhibition has decreased significantly overall.</li>
						</ul>
					</Col>
				</Row>
			</div>
		)
	}

	renderBlackDisparities() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Varying Details About Force Used on Individuals</h4>

						<p>In the following sections, we highlight the amount of force used against black people in
New Orleans. Much of our analysis shows that black people (excluding other people of
color) in New Orleans experience, by a large margin, the majority of force used by the
NOPD. Therefore, it is clearest to present findings in only two race-based categories:
black people, and non-black people (Native American, White, Hispanic, Asian, and all
other races) than it would be to give data for each individual race.</p>

						<p>It should be noted that black people + non-black people is always equal to 100%. When
reading a graph that shows what percentage of force is used against black people, the
reader may calculate the amount of force used against non-black people by subtracting
from 100%.</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>RACE OF INDIVIDUAL BY MONTH</h6>
						{/* <BlackDisparitiesByMonthPlot /> */}
						<h5 className="text-center">FIGURE 27: UOF AGAINST BLACK PEOPLE</h5>

					</Col>
				</Row>
				<Row>
					<Col>
						<h6>Race disparities by district</h6>
						<p>Note: Currently missing OPSO data required to show arrests.</p>
						{/* <BlackDisparitiesByDistrictPlot /> */}
						<ul>
							<li>Stops & searches, as well as UOF, disproportionately negatively impact Black
people. Other departments analyzed, such as the Metropolitan Police Department
(Washington DC) and Chicago Police Department, suggest that increased
community policing and increased and improved officer training could begin to
remedy disparities in the policing of Black people.</li>
							<li>These results are consistent with 2017 where force is used disproportionately
against Black people in nearly every month and district.</li>
						</ul>

						<strong><u>Recommendation</u></strong>
						<p>OIPM recommends that NOPD train all police officers on implicit bias and anti-
oppression. That would be two concrete steps toward addressing the over-policing of
Black people in New Orleans.</p>

						<strong><u>NOPD Response to the Recommendation</u></strong>
						<p>NOPD officers receive a minimum of four hours of training annually on bias-free
policing, which includes implicit bias. Principles of community-oriented policing are
infused throughout courses in both the Academy and officers’ required annual Core In-
Service training.</p>
						<p>OIPM is pleased to report on the training that is already in place at NOPD. However,
because the training does not appear to have the anti-oppression component that OIPM
is recommending, OIPM will attend the current training to see if there are any further
recommendations that can be made. OIPM will report out on its findings in its 2019
Annual Report or sooner.</p>
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
					<Col><h2 id="force-public-demographics-section">Section VIII: INDIVIDUALS SUBJECTED TO NOPD FORCE</h2></Col>
				</Row>

				{this.renderUofBySexRace()}
				{this.renderUofByTypeSexRace()}
				{this.renderBlackDisparities()}

			</div>
		)
	}
}

export default PublicDemographicsSection
