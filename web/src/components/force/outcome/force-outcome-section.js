import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

import UofByEffectivenessPlot from './uof-by-effectiveness-plot'
import UofByDispositionPlot from './uof-by-disposition-plot'
import UofByOfficerInjuryPlot from './uof-by-officer-injury-plot'
import UofByPublicInjuryPlot from './uof-by-public-injury-plot'

class ForceOutcomeSection extends React.Component {
	constructor() {
		super()
	}

	renderUofByEffectiveness() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Force by Type and Effectiveness</h4>
						<UofByEffectivenessPlot />
						<h5 className="text-center">FIGURE 14: UOF EFFECTIVENESS BY TYPE</h5>
						<p>OIPM and NOPD have discussed that NOPD has no consistent internal definition for
the terms “effective”, “not effective”, and “limited effectiveness”. The service provider
that provides NOPD’s use of force tracking software suggested the following
definitions:</p>
					<em><ul className="pl-5">
						<li>Effective: The force used resulted in stopping the threat or action so no further force was
necessary.</li>
						<li>Not Effective: The force used did not end the threat, and additional force options had to be
utilized to end the threat, or the suspect/combatant escaped.</li>
						<li>Limited Effectiveness: The force used initially resulted in compliance, but the
suspect/combatant overcame the force, created an additional threat which resulted in
additional force or he escaped.</li>
					</ul></em>
						<p>Based on comments received from NOPD, it is unlikely that these definitions are known
and used by the entire police force.</p>
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByOfficerInjury() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Officer Injuries</h4>
						<UofByOfficerInjuryPlot />
						<h5 className="text-center">FIGURE 16: UOF LEADING TO OFFICER INJURY</h5>
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByPublicInjury() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<h4>Individual Injury</h4>
						<UofByPublicInjuryPlot />
						<h5 className="text-center">FIGURE 17: UOF LEADING TO INDIVIDUAL INJURY</h5>
					</Col>
				</Row>
			</div>
		)
	}

	renderUofByDisposition() {
		return (
			<div className="my-3">
				<Row>
					<Col>
						<UofByDispositionPlot />
						<h5 className="text-center">FIGURE 15: NOPD's Disposition of Use of Force</h5>

					</Col>
				</Row>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Row>
						<Col><h2 id="force-outcome-section">SECTION III: FORCE BY OUTCOME</h2></Col>
				</Row>

				{this.renderUofByEffectiveness()}
				{this.renderUofByDisposition()}
				{this.renderUofByOfficerInjury()}
				{this.renderUofByPublicInjury()}
			</div>
		)
	}
}

export default ForceOutcomeSection
