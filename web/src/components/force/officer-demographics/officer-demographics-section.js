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
						<h4>Use of Force by Officer Age and Years of Experience</h4>
				{/* <UofByOfficerAgeExpPlot /> */}
						<h5 className="text-center">FIGURE 23: UOF BY OFFICER AGE &amp; YEARS OF EXPERINCE</h5>
<ul>
							<li>Use of force varies greatly by age group. Officers ages 26-35 account for more
UOF than all other groups combined but are only about 24% of officers. Within
the 26-30 and 31-35 groups, officers with less than 5 years of experience are most
likely to use force.</li>
							<li>The oldest (51 or older) NOPD officers are least likely to use UOF. They account
for over 30% of officers but have the second fewest force incidents.</li>
							<li>The youngest officers account for just under 9% of all UOF but they comprise 4%
of officers. Relative to the number of officers, the youngest officers do use a
disproportionate amount of force.</li>
							<li>Starting around age 30, many officers with more than 5 years of experience use
force at non-negligible rates.</li>
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
						<h5 className="text-center">FIGURE 24: TYPE OF FORCE BY OFFICER GENDER AND RACE</h5>
						<ul>
							<li>There are approximately 3.5 times more male officers than females. But male
officers account for about 9.5 times the amount of force as female officers.</li>
							<li>In 2018, white male officers account for 15 more UOF than all other officers
combined, though they make up less than 50% of NOPD. These statistics are
nearly identical to 2017’s data.</li>
						</ul>
		
					</Col>
				</Row>

				<Row>
					<Col>
						<h6>Use of Force by Female Officer Race</h6>
						<UofByOfficerFemaleRacePlot />
						<h5 className="text-center">FIGURE 25: UOF BY TYPE FOR FEMALE OFFICERS</h5>
						<ul>
							<li>Black female officers used slightly more force than white female officers. Because
there are more black female officers than white female officers, their use of force
is proportional.</li>
							<li>Female officers are responsible for approximately 10% of all use of force.</li>
						</ul>

					</Col>

				</Row>

				<Row>

					<Col>
						<h6>Use of Force by Male Officer Race</h6>
						<UofByOfficerMaleRacePlot />
						<h5 className="text-center">FIGURE 26: UOF BY TYPE FOR MALE OFFICERS</h5>
						<ul>
							<li>Male officers are responsible for approximately 90% of force.</li>
							<li>There are 450 white male officers and 481 black male officers.</li>
							<li>White male officers use 1.5 times the force of black male officers.</li>
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
						<h4>Type of force by officer race and gender</h4>
						<p>Already mentioned trends are apparent here</p>
						<ul>
							<li>Males use more force than females.</li>
							<li>White males use force disproportionately compared to black males.</li>
							<li>Black females use more force than white females but do so proportionally.</li>
							<li>Firearm exhibition is popular among both genders.</li>
						</ul>
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
						<Col><h2 id="force-officer-demographics-section">SECTION VII: GROUPING OF NOPD OFFICERS</h2></Col>
				</Row>

				{this.renderUofByOfficerAgeExp()}
				{this.renderUofBySexRace()}
			</div>
		)
	}
}

export default OfficerDemographicsSection
