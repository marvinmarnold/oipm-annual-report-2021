import React from "react"
import { Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

// Components
import Page from "../components/layout/page"
import MostForcefulSection from '../components/force/most-forceful/most-forceful-section'

const ForcePage = () => (
	<Page
		title={"UOF by Most Force"}
		nav={
			<Nav className="mt-4" vertical>
				<NavItem>
					<NavLink href="/force" className="text-white">Introduction &amp; City comparison</NavLink>
				</NavItem>	
				<NavItem>
					<NavLink href="/force-time" className="text-white">Section 1: Force over time</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-level" className="text-white">Section 2: Force by type and level</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-outcome" className="text-white">Section 3: Force by outcome</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-justification" className="text-white">Section 4: Justification for force</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-most" className="text-white">Section 5: Officers using most force</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-officer" className="text-white">Section 6: By officer demographics</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/force-individual" className="text-white">Section 7: By individual demographics</NavLink>
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

				<MostForcefulSection />

				<Row className="text-center">
					<Col className="py-5">
					<a href="/force-justification" className="text-white"><Button size="lg" color="secondary" className="mx-3">&lt; Previous: Force by justification</Button></a>
					<a href="/force-officer" className="text-white"><Button size="lg" color="success">Next: Force by officer details ></Button></a>
					</Col>
				</Row>

			</div>
		}
	/>
)

export default ForcePage
