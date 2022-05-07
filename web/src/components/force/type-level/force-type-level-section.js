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
						<h5 className="text-center">FIGURE 4: AMOUNT OF FORCE (UOF) BY LEVEL BREAKDOWN - L1</h5>
						
					</Col>
				</Row>

				<Row>
					<Col>
						<h4>Level 2 Force</h4>
						<UofL2Plot />
						<h5 className="text-center">FIGURE 5: AMOUNT OF FORCE (UOF) BY LEVEL BREAKDOWN - L2</h5>
					</Col>
				</Row>

				<Row>
					<Col>
						<h4>Level 3 Force</h4>
						<UofL3Plot />
						<h5 className="text-center">FIGURE 6: AMOUNT OF FORCE (UOF) BY LEVEL BREAKDOWN - L3</h5>

					</Col>
				</Row>

				<Row>
					<Col>
						<h4>Level 4 Force</h4>
						<UofL4Plot />
						<h5 className="text-center">FIGURE 7: AMOUNT OF FORCE (UOF) BY LEVEL BREAKDOWN - L4</h5>

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
						<h5 className="text-center my-5"><u>THE REMAINDER OF THIS REPORT FOCUSES ON 2021 DATA ONLY</u></h5>
						<hr />

						<h4>Force By Type and Level</h4>

					</Col>
				</Row>
				<Row>
					<Col>
						<UofByLevelTypePlot />
						<h5 className="text-center">FIGURE 8: FORCE AND TYPE BY LEVEL OVERVIEW</h5>

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
						<h5 className="text-center">FIGURE 9: UOF BY DISTRICT/DIVISION LEVEL AND TYPE</h5>
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
						<h5 className="text-center">FIGURE 10: Level 1 USE OF FORCE</h5>
					</Col>
				</Row>

				<Row className="my-3">
					<Col>
						<UofPieL2Type />
						<h5 className="text-center">FIGURE 11: Level 2 USE OF FORCE</h5>
					</Col>
				</Row>

				<Row className="my-3">
					<Col>
						<UofPieL3Type />
						<h5 className="text-center">FIGURE 12: Level 3 USE OF FORCE</h5>
					</Col>
				</Row>

				<Row className="my-3">
					<Col>
						<UofPieL4Type />
						<h5 className="text-center">FIGURE 13: Level 4 USE OF FORCE</h5>
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
					<Col><h2 id="force-type-level-section">Section II: Force by Type and Level</h2>
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
