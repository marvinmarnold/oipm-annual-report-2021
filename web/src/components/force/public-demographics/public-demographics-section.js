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
                        <h1>MARVIN TODO</h1>
						<h6>RACE OF INDIVIDUAL BY MONTH</h6>
						{/* <BlackDisparitiesByMonthPlot /> */}
						<h5 className="text-center">FIGURE 26: UOF AGAINST BLACK PEOPLE</h5>

					</Col>
				</Row>
				<Row>
					<Col>
                    <h1>MARVIN TODO</h1>
						<h6>Race disparities by district</h6>
						{/* <BlackDisparitiesByDistrictPlot /> */}
						
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
					<Col><h2 id="force-public-demographics-section">Section VII: INDIVIDUALS SUBJECTED TO NOPD FORCE</h2></Col>
				</Row>

				{this.renderUofBySexRace()}
				{this.renderUofByTypeSexRace()}
				{this.renderBlackDisparities()}

			</div>
		)
	}
}

export default PublicDemographicsSection
