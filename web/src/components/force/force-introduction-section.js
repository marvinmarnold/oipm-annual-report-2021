import React from "react"
import { Row, Col } from 'reactstrap'

// import ForceByCityPlot from './force-by-city-plot'

const ForceIntroductionSection = () => (
	<div>
		<Row>
			<Col><h2 id="force-introduction-section">Introduction &amp; terms</h2></Col>
		</Row>
		<Row>
			<Col>
				<h4>FTN &amp; UOF</h4>
				<p>FTN stands for “force tracking number”. It is the designation given to track the entirety
					of an interaction between NOPD and one or more individuals wherein force was used.</p>
				<p>There were 441 FTNs issued in 2018. Those cases were analyzed for this report.</p>
				<p>UOF stands for “use of force”. It represents a specific type of force used by a specific
					officer against a specific person. There were 1,108 UOFs in 2018.</p>
				<p>A single FTN corresponds to one or more UOF. If Officer A and Officer B both use their
				hands against Individual C, the result would be one FTN, corresponding to two UOFs (one for each officer).
				The same pattern would apply if there were multiple types of
				force used or multiple individuals that force was used on.</p>
				There were 2.5 times more UOFs than FTNs. This means that each incident involved an
				average of 2.5 different types of force, officers, or individuals. In 2017, the ratio was 2.6
				UOF per FTN.
				<p>This report will always clearly label whether FTN or UOF is being used for an analysis,
				but the onus is on the reader to remain vigilant of the distinction.</p>

				<h4>Race-Based Analysis</h4>
				<p>Occasionally we will show use of force data in relation to all races that NOPD reports:
				Black, Hispanic, American Indian, Asian, and White. However, much of our analysis
				shows that black people (excluding other people of color) in New Orleans experience,
				by a large margin, the majority of force used by the NOPD. In most cases, it is clearest to
				present findings in only two race-based categories: black people, and non-black people
				(Native American, White, Hispanic, Asian, and all other races) than it would be to give
				data for each individual race.</p>
				<p>It should be noted that black people + non-black people is always equal to 100%. When
				reading a graph that shows what percentage of force is used against black people, the
				reader may calculate the amount of force used against non-black people by subtracting
				from 100%.</p>

				<h4>Firearm and CEW / Taser Usage Terminology</h4>
				<p>NOPD and OIPM have discussed how to refer to the people that force is used on.
				Subjects, survivors, citizens, objects, victims, people, and several other options have been
				considered. Following a recommendation from NOPD, OIPM has decided to refer to
				this group as ‘individuals. It is our hope that this terminology adequately reflects the
				humanity of persons that force is used against.</p>

				<h4>Individuals</h4>
				<p>NOPD and OIPM have discussed how to refer to the people that force is used on.
				Subjects, survivors, citizens, objects, victims, people, and several other options have been
				considered. Following a recommendation from NOPD, OIPM has decided to refer to
				this group as ‘individuals. It is our hope that this terminology adequately reflects the
				humanity of persons that force is used against.</p>
			</Col>
		</Row>
	</div>
)

export default ForceIntroductionSection
