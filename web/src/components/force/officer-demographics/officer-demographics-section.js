import React from "react"
import { Row, Col } from 'reactstrap'

// import UofByOfficerAgeExpPlot from './uof-by-officer-age-exp-plot'
import UofByOfficerSexRacePlot from './uof-by-officer-sex-race-plot'
import UofByOfficerFemaleRacePlot from './uof-by-officer-female-race-plot'
import UofByOfficerMaleRacePlot from './uof-by-officer-male-race-plot'
import UofByOfficerFemaleTypeRacePlot from './uof-by-officer-female-type-race-plot'
import UofByOfficerMaleTypeRacePlot from './uof-by-officer-male-type-race-plot'

class OfficerDemographicsSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByOfficerAgeExp() {
		return (
			<div className="my-3">
				<Row>
					<Col>
                        <h1>MISSING ADP DATA</h1>
						<h4>Use of Force by Officer Age and Years of Experience</h4>
				{/* <UofByOfficerAgeExpPlot /> */}
						<h5 className="text-center">FIGURE 22: UOF BY OFFICER AGE &amp; YEARS OF EXPERINCE</h5>
<ul>
						</ul>
					</Col>
				</Row>
			</div>
		)
	}

	renderUofBySexRace() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Type of Force by Officer Gender and Race</h4>
<UofByOfficerSexRacePlot />
						<h5 className="text-center">FIGURE 23: TYPE OF FORCE BY OFFICER GENDER AND RACE</h5>
		
					</Col>
				</Row>

				<Row>
					<Col>
						<h6>Use of Force by Female Officer Race</h6>
						<UofByOfficerFemaleRacePlot />
						<h5 className="text-center">FIGURE 24: UOF BY TYPE FOR FEMALE OFFICERS</h5>
					</Col>

				</Row>

				<Row>

					<Col>
						<h6>Use of Force by Male Officer Race</h6>
						<UofByOfficerMaleRacePlot />
						<h5 className="text-center">FIGURE 25: UOF BY TYPE FOR MALE OFFICERS</h5>
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
						<h4>Type of force by officer race and gender</h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>Female officers</h6>
						<UofByOfficerFemaleTypeRacePlot />
					</Col>
					<Col>
						<h6>Male officers</h6>
						<UofByOfficerMaleTypeRacePlot />
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-officer-demographics-section">SECTION VI: GROUPING OF NOPD OFFICERS</h2></Col>
				</Row>

				{this.renderUofByOfficerAgeExp()}
				{this.renderUofBySexRace()}
			</div>
		)
	}
}

export default OfficerDemographicsSection
