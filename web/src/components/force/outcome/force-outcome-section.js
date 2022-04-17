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
						<h5 className="text-center">FIGURE 15: UOF EFFECTIVENESS BY TYPE</h5>
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
				<Row>
					<Col>
						<strong>Analysis</strong>
						<ul>
							<li>NOPD self-determined effectiveness and its guidelines remain unclear.</li>
							<li>Most UOF is determined effective by NOPD.</li>
							<li>For two years in a row, baton (non-strike), L1-other, and L2-other were deemed
100% effective.</li>
							<li>In 2018, just as in 2017, L2-taser was determined to be one of the least effective
UOF types.</li>
							<li>Taser deployments were the only categories that had any force that was
classified as “limited effectiveness”.</li>
						</ul>

						<strong><u>Recommendation</u></strong>
						<p>In 2017 OIPM recommended that NOPD include the definitions for effective, not
effective and limited effectiveness in the NOPD Operations Manual. This way members
of the police department have a common understanding of these terms. One thought
was to put these definitions in Blue Team in addition to the NOPD Operations Manual.</p>
						<p>In 2017 NOPD agreed to explore how they could best implement this recommendation.
However, this recommendation was not implemented.</p>

						<strong><u>NOPD Response to the Recommendation</u></strong>
						<p>Prior to the issuance of this report, OIPM met with the Commander of the Professional
Standards & Accountability Bureau of NOPD. The Commander has agreed to work
with OIPM in 2019 to figure out the best way to address this issue. OIPM looks forward
to reporting in 2019 on how this recommendation was implemented.</p>
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
						<p>NOPD police officers face a real risk of injury and death. This is critical to
understanding the context in which officers make decisions to use force. But risk of
injury is not unique to officers. Individuals who are the subjects of police force also face
a risk of injury. See “UOF leading to individual injury” for reference to how UOF injury
risk applies to individuals who are subjected to NOPD use of force.</p>
						<ul>
							<li>Officers were injured by UOF 16% of the time.</li>
							<li>Officer injures increased by 2.4% since 2017.</li>
						</ul>
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
						<ul>
							<li>Risk of injury is not unique to officers. Individuals who are the subjects of police
force also face a risk of injury.</li>
							<li>Individuals were injured by UOF 19.5% of the time.</li>
							<li>Individuals with injuries were down 2.8% from 2017.</li>
							<li>The percentage of individual injuries related to UOF appears lower than in some
other municipalities, for instance District of Columbia Police Department with 55%.</li>
						</ul>
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
						<h4>NOPD's Determination of Unauthorized Force</h4>
						<ul>
							<li>In previous years, OIPM reported dispositions at the UOF level. Doing so does not
accurately represent NOPD data which only captures dispositions at the incident
(FTN) level. In this report and future reports, force dispositions will be reported by
FTN.</li>
							<li>There were 7 unjustified UOF in 2018.</li>
							<li>The number of unjustified UOF has increased from 1, to 6, to 7 (2016-2018).</li>
							<li>A study on complaints stemming from a use of force by the National Institute of
Justice predicts 6.5 unjustified use of force for a department the size of NOPD.</li>
							<li>NOPD determined that force is “not justified” in 1.4% of force incidents in 2018.</li>
						</ul>
					</Col>
				</Row>
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
						<Col><h2 id="force-outcome-section">SECTION IV: FORCE BY OUTCOME</h2></Col>
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
