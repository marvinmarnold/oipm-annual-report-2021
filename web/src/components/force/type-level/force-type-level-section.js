import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"


import UofByLevelTypePlot from './uof-by-level-type-plot.js'
import UofByLevelDistrictPlot from './uof-by-level-district-plot.js'

import UofL1Plot from './type-level-year/uof-l1-plot.js'
import UofL2Plot from './type-level-year/uof-l2-plot.js'
import UofL3Plot from './type-level-year/uof-l3-plot.js'
import UofL4Plot from './type-level-year/uof-l4-plot.js'

import UofPieL1Type from './type-level-pies/uof-pie-l1-type'
import UofPieL2Type from './type-level-pies/uof-pie-l2-type'
import UofPieL3Type from './type-level-pies/uof-pie-l3-type'
import UofPieL4Type from './type-level-pies/uof-pie-l4-type'

class ForceTypeLevelSection extends React.Component {
	constructor() {
		super()
	}


	renderByLevelTypeYear() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Level 1 Force</h4>
						<UofL1Plot />
						<h5 className="text-center">FIGURE 5: AMOUNT OF FORCE (UOF) BY LEVEL BREAKDOWN - L1</h5>
						
					</Col>
				</Row>

				<Row>
					<Col>
						<ul>
							<li>Level 1 force decreased for the third year in a row.</li>
							<li>In 2018, NOPD stopped counting the exhibition of tasers as a use of force. In
							2017, there were 126 such incidents. In 2016 there were 118. The policy change
							caused the number to drop to 20 before the policy took effect in April 2018.
							Using historic trends, this policy change is projected to account for the reduction
							in UOF to 102 for 2018.</li>
							<li>From 2017-2018, Level 1 force decreased by close to 270 UOF or 77% more than
							from 2016-2017. But 38% of that decline may be attributed to the policy change
							regarding taser exhibition.</li>
						</ul>
					</Col>
				</Row>

				<Row>
					<Col>
						<h4>Level 2 Force</h4>
						<UofL2Plot />
						<h5 className="text-center">FIGURE 6: AMOUNT OF FORCE (UOF) BY LEVEL BREAKDOWN - L2</h5>
					</Col>
				</Row>

				<Row>
					<Col>
						<ul>
							<li>Level 2 UOF decreased 49% in 2018, dropping from 382 in 2017 to 185 in 2018.
This is the lowest Level 2 has been since 2015.</li>
							<li>Defense tech/take down decreased by 72%, from 296 to 83.</li>
							<li>Taser deployment has averaged about 57 UOF from 2016 to 2018 and remained
consistent.</li>
							<li>Canine (no bite) decreased by 5 incidents from 21 in 2017 to 16 in 2018.</li>
						</ul>
					</Col>
				</Row>

				<Row>
					<Col>
						<h4>Level 3 Force</h4>
						<UofL3Plot />
						<h5 className="text-center">FIGURE 7: AMOUNT OF FORCE (UOF) BY LEVEL BREAKDOWN - L3</h5>

					</Col>
				</Row>

				<Row>
					<Col>
						<ul>
							<li>Level 3 force has doubled for the second year in a row. There were 3 L3 UOF in
2016, 7 in 2017, and 15 in 2018.</li>
							<li>Since 2015, head strike (no weapon) has been steadily increasing up to 11 in 2018
after starting at 2 in 2015.</li>
						</ul>
					</Col>
				</Row>

				<Row>
					<Col>
						<h4>Level 4 Force</h4>
						<UofL4Plot />
						<h5 className="text-center">FIGURE 8: AMOUNT OF FORCE (UOF) BY LEVEL BREAKDOWN - L4</h5>

					</Col>
				</Row>

				<Row>
					<Col>
						<ul>
							<li>Level 4 force has decreased yearly since 2015.</li>
							<li>There was no firearm discharged at a person in 2018.</li>
							<li>While level 4 UOF has decreased overall, force while handcuffed increased from
1 in 2017 to 6 in 2018.</li>
							<li>One UOF was classified as Other in 2016 corresponding to serious physical
injury occurring when the individual placed his legs on the interior door panel of
the police vehicle and pushed out as officers on the door’s exterior pushed the
door closed. The individual’s leg was dislocated during this process.</li>
						</ul>
					</Col>
				</Row>
			</div>
		)
	}


	renderUofByLevelType() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<hr />
						<h5 className="text-center my-5"><u>THE REMAINDER OF THIS REPORT FOCUSES ON 2018 DATA ONLY</u></h5>
						<hr />

						<h4>Force By Type and Level</h4>

					</Col>
				</Row>
				<Row>
					<Col>
						<UofByLevelTypePlot />
						<h5 className="text-center">FIGURE 9: FORCE AND TYPE BY LEVEL OVERVIEW</h5>

					</Col>
				</Row>
				<Row>
					<Col>
						<ul>
							<li>Level 1 force accounts for just over 81% of all force followed by Level 2 with just
over 16% of all force.</li>
							<li>Exhibiting firearms accounts for slightly more UOF than all other types
combined, similar to 2017 statistics.</li>
						</ul>
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByLevelDistrict() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Force by Level and District/Division</h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<UofByLevelDistrictPlot />
						<h5 className="text-center">FIGURE 10: UOF BY DISTRICT/DIVISION LEVEL AND TYPE</h5>
					</Col>
				</Row>
				<Row>
					<Col className="col-5">
						<ul>
							<li>The 8 police districts in New Orleans represent different types and patterns of
criminal activity. Variations in police use of force in these districts cannot solely
be attributed to differences in policing practices. The same is true for Special
Operations and other divisions tasked with specific subsets of police work.</li>
							<li>The districts with the highest UOF are the 3rd, 8th, 7th, and Special Operations,
respectively. These districts are the top four for a second year in a row.</li>
							<li>The 7th district has the highest level 4 UOF and the 8th district has the highest
level 3 UOF.</li>
						</ul>
					</Col>
				</Row>
			</div>
		)
	}

	renderUofPiesByLevelType() {
		return (
			<div className="my-3">


				<Row>
					<Col>
						<h4>Types of Force by Level</h4>
						<UofPieL1Type />
						<h5 className="text-center">FIGURE 11: Level 1 USE OF FORCE</h5>
						<ul>
							<li>The highest percentage of level 1 UOF is firearm exhibited.</li>
							<li>Hands/escort tech is the second most common low level UOF, followed by
takedown (no injury). Together, the top three types represent more than 96% of
all level 1 force.</li>
							<li>Level 1 force is more common than all other levels of force.</li>
						</ul>
					</Col>
				</Row>

				<Row className="my-3">
					<Col>
						<UofPieL2Type />
						<h5 className="text-center">FIGURE 12: Level 2 USE OF FORCE</h5>
						<ul>
							<li>Defense tech/takedown represents almost half of all level 2 force in 2018 with
approximately 45%. That percentage is down from 77.4% in 2017.</li>
							<li>Taser is the second most common level 2 UOF, representing just over 30% of the
category.</li>
						</ul>
					</Col>
				</Row>

				<Row className="my-3">
					<Col>
						<UofPieL3Type />
						<h5 className="text-center">FIGURE 13: Level 3 USE OF FORCE</h5>
						<ul>
							<li>Head strike (no weapon) is overwhelmingly the level 3 UOF utilized for a second
year in a row, with 11 UOF in 2018. At 73.3%, head strikes (no weapon) were
down 14.3% from 2017.</li>
							<li>The Other UOF represents a single FTN where two officers both used head
strikes and body strikes against a single individual.</li>
						</ul>
					</Col>
				</Row>

				<Row className="my-3">
					<Col>
						<UofPieL4Type />
						<h5 className="text-center">FIGURE 14: Level 4 USE OF FORCE</h5>
						<ul>
							<li>Level 4 UOF is least common, with 9 total instances.</li>
							<li>Force on handcuffed individuals are the most frequent Level 4 UOF (6), followed
by L-4 taser (2).</li>
						</ul>
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
					<Col><h2 id="force-type-level-section">Section III: Force by Type and Level</h2>
					<p>NOPD classifies UOF incidents into four levels: 1, 2, 3, and 4 -- with level 4 being the
					most serious and level 1 being the least serious. These levels were defined in more
					detail during the introductory portion of this report, in the section titled
					“Investigations and Levels of Force”.</p></Col>
				</Row>
				{this.renderByLevelTypeYear()}
				{this.renderUofByLevelType()}
				{this.renderUofByLevelDistrict()}
				{this.renderUofPiesByLevelType()}

			</div>
		)
	}
}

export default ForceTypeLevelSection
