import React from "react"
import { Row, Col } from 'reactstrap'

import UofByYearPlot from './uof-by-year-plot'
import FtnByYearPlot from './ftn-by-year-plot'
import ForceByMonthPlot from './force-by-month-plot'

class ForceTimeSection extends React.Component {
	constructor() {
		super()
	}

    renderFtnByYear() {
		return (
			<div id="ftn-year" className="m-3">
				<Row>
					<Col><h4>Annual Comparison - Incidents Involving Force (FTN) by Year</h4></Col>
				</Row>
				<Row>
					<Col>
						<FtnByYearPlot />
						<h5 className="text-center">FIGURE 1: TOTAL FTN BY YEAR</h5>
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByYear() {
		return (
			<div id="uof-year" className="my-3">
				<Row>
					<Col><h4>Annual Comparison - Amount of Force (UOF) by Year</h4></Col>
				</Row>
				<Row>
					<Col>
						<UofByYearPlot />
						<h5 className="text-center">FIGURE 2: TOTAL UOF BY YEAR</h5>

					</Col>
				</Row>
			</div>
		)
	}

	renderForceByMonth() {
		return (
			<div id="force-month" className="my-3">
				<Row>
					<Col><h4>FTN &amp; UOF in 2018 by Month</h4></Col>
				</Row>
				<Row>
					<Col>
						<ForceByMonthPlot />
						<h5 className="text-center">FIGURE 3: FTN &amp; UOF BY MONTH</h5>

					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
					<Col><h2 id="force-time-section">Section I: Force over time</h2></Col>
				</Row>

				{this.renderFtnByYear()}
				{this.renderUofByYear()}
				{this.renderForceByMonth()}
			</div>
		)
	}
}

export default ForceTimeSection
