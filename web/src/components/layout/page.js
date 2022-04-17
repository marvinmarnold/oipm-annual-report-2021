import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Layout from "./layout"
import SEO from "./seo"


export default class Page extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title={this.props.title} />

				<Container fluid>
					<Row>
						<Col className="bg-secondary" xs="12" lg="2" md="3">
							<h4 className="mt-5">Jump to...</h4>
							{this.props.nav}
						</Col>

						<Col xs="12" lg="10" md="9">
							{this.props.body}
						</Col>
					</Row>

				</Container>
			</Layout>
		)
	}


}
