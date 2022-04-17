import React from "react"
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

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
						<ul>
							<li>For the second year in a row, resisting arrest/escape is the most common reason
for force at 50.4%, followed by refusing verbal commands at 18%.</li>
							<li>The other category decreased notably from 18.9% in 2017 to 6.4% in 2018.</li>
							<li>Upon reviewing UOF statistics information from other police departments, it
remains unclear as to whether “refusing verbal commands” is a justifiable reason
for UOF. It is unclear from the data whether “refusing verbal commands"
solely was the reason for the use of force or if verbal commands were part of a
continuum and other incidents occurred that justified the force.</li>
							<li>Some other departments also take into consideration whether a subject is
exhibiting possible signs of mental illness in deciding if UOF is appropriate or
justified.</li>
						</ul>
						<strong>In response to the last bullet point by OIPM above the NOPD sent the following
response:</strong>
						<p>NOPD policy 1.3: Use of Force states that “When feasible based on the circumstances,
officers will use de-escalation techniques, disengagement; area containment;
surveillance; waiting out a subject; summoning reinforcements; and/or calling in
specialized units such as mental health and crisis resources, in order to reduce the need
for force, and increase officer and civilian safety. Moreover, the officers shall de-escalate
the amount of force used as the resistance decreases.”</p>
						<p>The use of force principles enshrined in policy 1.3: Use of Force include the following:
“Officers will use disengagement; area containment; surveillance; waiting out a subject;
summoning reinforcements; and/or calling in specialized units such as mental health
professionals or a crisis response team, when feasible, in order to reduce the need for
force and increase officer and civilian safety. (e) When possible, officers shall allow
individuals time to submit to arrest.”</p>
						<p>Police 1.3: Use of Force also specifically names “the subject’s mental state or capacity”
as one of the “facts and circumstances” to consider “when determining whether to use
force and in evaluating whether an officer has used reasonable force.”</p>
						<p>All NOPD officers have received a minimum of eight hours of training on responding
to persons in behavioral or mental crisis, as well as annual refresher instruction on crisis
intervention and de-escalation tactics during Core In-Service.</p>
						<p>NOPD has adopted the Crisis Intervention Team (CIT) model, a nationally recognized
‘best practices’ approach in recognizing and managing behavior that may be
attributable to a mental health disorder. Under this program, specially chosen officers
receive 40 hours of intense training from mental health experts focused on techniques
and best practices for minimizing the use of force against individuals in crisis due to
mental illness or a behavioral disorder. CIT officers are assigned to each police district
and are trained to respond to and de-escalate mental health crises. As of May 2019,
NOPD has trained and certified 263 officers and supervisors. CIT-trained officers
currently account for 38% of all patrol officers</p>

						<strong><u>Recommendation</u></strong>
						<p>OIPM recommends that NOPD clarify what the category “refusing verbal commands”
means. It is unclear from the data whether “refusing verbal commands“solely was the
reason for the use of force or if verbal commands were part of a continuum and other
incidents occurred that justified the force.</p>
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

						<ul>
							<li>Weapon exhibited was not the most common reason for exhibiting a firearm; it
represented about 15% of total reasons.</li>
							<li>The top three reasons for exhibiting firearms are flight from an officer, tactical
deployments, and resisting lawful arrest.</li>
							<li>Other represented about 10% of the reason for exhibiting a firearm, down from
30% in 2017 and over 50% in 2016. We commend NOPD for following our
recommendation to address the excessive categorization of Other.</li>
						</ul>

						<strong><u>Recommendation</u></strong>
						<p>OIPM recommends that Other categories should generally make up no more than 5% of
the group.</p>

						<strong><u>NOPD Response to the Recommendation</u></strong>
						<p>NOPD accepted the recommendation and agreed to continue to evaluate this category
and make necessary adjustments.</p>
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

						<ul>
							<li>More than 75% of instances that preceded force were “Calls for Service” or
“arresting” (an individual).</li>
							<li>While traffic stops were the third most common event to precede force in 2017 at
12.4%, it was the fifth most common in 2018 at 4.36%.</li>
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
						<Col><h2 id="force-justification-section">SECTION V: JUSTIFICATION FOR FORCE</h2></Col>
				</Row>

				{this.renderUofByReason()}
				{this.renderFirearmUofByReason()}
				{this.renderUofByPreceding()}

			</div>
		)
	}
}

export default ForceJustificationSection
