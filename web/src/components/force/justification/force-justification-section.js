import React from "react"
import { Row, Col } from 'reactstrap'

import UofByReasonPlot from './uof-by-reason-plot.js'
import FirearmUofByReasonPlot from './firearm-uof-reason-plot.js'
import UofByPrecedingPlot from './uof-by-preceding-plot.js'

class ForceJustificationSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByReason() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Reason for force</h4>
						<UofByReasonPlot />
						<h5 className="text-center">FIGURE 18: UOF BY REASON</h5>
					</Col>
				</Row>
			</div>
		)
	}

	renderFirearmUofByReason() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Reason for Exhibiting Firearms</h4>
						<FirearmUofByReasonPlot />
						<h5 className="text-center">FIGURE 19: REASONS FOR EXHIBITING FIREARMS</h5>
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByPreceding() {
		return (
			<div>
				<Row>
					<Col>
						<h4>Service Type or What Preceded the Use of Force</h4>
						<UofByPrecedingPlot />
						<h5 className="text-center">FIGURE 20: UOF BY SERVICE TYPE</h5>
					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-justification-section">SECTION IV: JUSTIFICATION FOR FORCE</h2></Col>
				</Row>

				{this.renderUofByReason()}
				{this.renderFirearmUofByReason()}
				{this.renderUofByPreceding()}

			</div>
		)
	}
}

export default ForceJustificationSection
