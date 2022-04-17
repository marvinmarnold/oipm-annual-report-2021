import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"

const ForcePage = () => (
	<Page
		title={"UOF Future Analysis"}
		nav={
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="/force" className="text-white">Introduction &amp; City comparison</NavLink>
				</NavItem>	
				<NavItem>
					<NavLink href="/force-time" className="text-white">Section 2: Force over time</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-level" className="text-white">Section 3: Force by type and level</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-outcome" className="text-white">Section 4: Force by outcome</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-justification" className="text-white">Section 5: Justification for force</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-most" className="text-white">Section 6: Officers using most force</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-officer" className="text-white">Section 7: By officer demographics</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-individual" className="text-white">Section 8: By individual demographics</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-future" className="text-white">Section 9: Future analysis</NavLink>
				</NavItem>
			</Nav>
		}
		body={
			<div>
				<Row>
					<Col>
						<h1 className="mt-5 text-center">2021 Annual Report</h1>
						<h2 className="mb-5 text-center">Statistical Review of NOPD's Use of Force</h2>
					</Col>
				</Row>

<Row>
					<Col><h2 id="force-public-demographics-section">Section IX: Research Based Areas For Future Analysis</h2>

					<p>For at least two years (2017 and 2018) OIPM has raised concerns about NOPD
use of force policing patterns regarding African American civilians in New
Orleans. Currently both African American women and African American men
experience the highest levels of most types of UOF. In next year’s report, we
hope to investigate and explore the reasons for these trends.</p>

<strong><u>Recommendation</u></strong>
						<p>OIPM recommends that NOPD’s Pubic Integrity Bureau and Professional Standards &
Accountability Bureau work with OIPM to develop a methodology for researching this
area. OIPM also suggests that both agencies work together to figure out potential
outside partner agencies that have an expertise in this area to work with NOPD and
OIPM to get maximum and dully understand the results from this process. OIPM
recommends that a joint report between OIPM and NOPD be released by the end of
2019 and/or by the time of the OIPM 2019 Annual Report that documents the findings
of the research.</p>
				</Col></Row>
				<Row className="text-center">
					<Col className="py-5">
					<a href="/force-individual" className="text-white"><Button size="lg" color="secondary" className="mx-3">&lt; Previous: Force by individual details</Button></a>

					</Col>
				</Row>


			</div>
		}
	/>
)

export default ForcePage
