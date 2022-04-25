import React from "react"
import {
	Container, Row, Col, Button,
	ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

// Components
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

// import BlackDisparitiesByMonthPlot from '../components/force/public-demographics/black-disparities-by-month-plot'
// import BlackDisparitiesByDistrictPlot from '../components/force/public-demographics/black-disparities-by-district-plot'
// import ComplaintsByCityPlot from "../components/complaints/complaints-by-city-plot"
// import ForceByCityPlot from "../components/force/force-by-city-plot"
// import ComplaintsByYearTypePlot from "../components/complaints/time/complaints-by-year-type-plot"
// import FtnByYearPlot from "../components/force/time/ftn-by-year-plot"

class IndexPage extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	normalizePath(path) {
	  return path.replace(/\/+/g, `/`)
	}

	withPrefix(path) {
	  return this.normalizePath(`${__PATH_PREFIX__}/${path}`)
	}

	renderTitle() {
			return (
				<div>
					<SEO title="2021 OIPM Annual Report" keywords={[
							`New Orleans`, `police`, `OIPM`, `NOPD`, `independent police monitor`,
							`oversight`, `data`, `analysis`, `annual report`, `2021`
						]} />

					<div className="bg-primary">
						<Container>
								<Row className="text-center">
									<Col className="mt-4">
										<h1 className="my-5">2021 Annual Report</h1>
									
										<h2 className="my-3 text-white">New Orleans</h2>
										<h2 className="my-3 text-white">Office of the Independent Police Monitor</h2>

										{this.renderNavigationButtons()}
									</Col>
								</Row>
							</Container>
						</div>
					</div>
			)
	}

	renderNavigationButtons() {
		return (
			<div className="my-5">
				<ButtonDropdown className="my-2" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle caret size="lg" className="mx-2">
						Jump to section
					</DropdownToggle>
					<DropdownMenu>
						<a href="#report-intro"><DropdownItem>Overview</DropdownItem></a>
						<a href={this.withPrefix("/force")}><DropdownItem>Use of Force</DropdownItem></a>
						<a href={this.withPrefix("/complaints")}><DropdownItem>Complaints &amp; Misconduct</DropdownItem></a>
						{/*<a href={this.withPrefix("/mediation")}><DropdownItem>Mediation</DropdownItem></a>
						<a href={this.withPrefix("/officers")}><DropdownItem>Officer Demographics</DropdownItem></a> */}
					</DropdownMenu>
				</ButtonDropdown>

				<Button className="my-2" size="lg" color="success"><a href="https://nolaipm.gov/annual-reports/" className="text-white">Download full report</a></Button>
			</div>
		)
	}

	renderIntroduction() {
		return (
			<Container id="report-intro">
				<Row className="mt-5 text-center">
					<Col><h3>NUMBERS AT A GLANCE</h3></Col>
				</Row>
			</Container>
		)
	}

	// renderCityComparison() {
	// 	return (
	// 		<Container>

	// 			<Row className="mt-5">
	// 				<Col><h4>COMPARISON TO OTHER CITIES</h4></Col>
	// 			</Row>

	// 			<Row className="mt-3">

	// 				<Col md="6">
	// 					<h5>Complaints</h5>
	// 					<ComplaintsByCityPlot />
	// 				</Col>
	// 				<Col md="6">
	// 					<h5>Use of Force</h5>
	// 					<ForceByCityPlot />
	// 				</Col>
	// 			</Row>
	// 	</Container>
	// 	)
	// }

	// renderNoTrends() {
	// 	return (
	// 		<Container>

	// 			<Row className="mt-5">
	// 				<Col><h4>TRENDS IN NEW ORLEANS</h4></Col>
	// 			</Row>

	// 			<Row className="mt-3">

	// 				<Col md="6">
	// 					<h5>Complaints</h5>
	// 					<ComplaintsByYearTypePlot />
	// 				</Col>
	// 				<Col md="6">
	// 					<h5>Use of Force</h5>
	// 					<FtnByYearPlot />
	// 				</Col>
	// 			</Row>
	// 	</Container>
	// 	)
	// }

	// renderForceBlack() {
	// 	return (
	// 		<Container>

	// 			<Row className="mt-3">
	// 				<Col><h4>DISPROPORTIONATE FORCE USED ON BLACK RESIDENTS</h4></Col>
	// 			</Row>

	// 			<Row className="mt-3">

	// 				<Col md="6">
	// 					<h5>Force by month</h5>
	// 					<BlackDisparitiesByMonthPlot />
	// 				</Col>
	// 				<Col md="6">
	// 					<h5>Force by district</h5>
	// 					<BlackDisparitiesByDistrictPlot />
	// 				</Col>
	// 			</Row>
	// 	</Container>
	// 	)
	// }

	renderNavigationButtonsPop() {
		return (
			<div className="mb-5">
				<ButtonDropdown className="my-2" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle caret size="lg" className="mx-2" color="primary">
						Jump to section
					</DropdownToggle>
					<DropdownMenu>
						<a href="#report-intro"><DropdownItem>Overview</DropdownItem></a>
						<a href={this.withPrefix("/force")}><DropdownItem>Use of Force</DropdownItem></a>
						<a href={this.withPrefix("/complaints")}><DropdownItem>Complaints &amp; Misconduct</DropdownItem></a>
						{/*<a href={this.withPrefix("/mediation")}><DropdownItem>Mediation</DropdownItem></a>
						<a href={this.withPrefix("/officers")}><DropdownItem>Officer Demographics</DropdownItem></a> */}
					</DropdownMenu>
				</ButtonDropdown>

				<Button className="my-2" size="lg" color="success"><a href="https://nolaipm.gov/annual-reports/" className="text-white">Download full report</a></Button>
			</div>
		)
	}

	renderNext() {
		return (
			<Container>

				<Row className="mt-5 text-center">
					<Col>
						<h2>CONTINUE READING</h2>
						{this.renderNavigationButtonsPop()}
				</Col>
				</Row>

		</Container>
		)
	}

	render() {
		return (
		  <Layout>

					{this.renderTitle()}
					{this.renderIntroduction()}
					{/* {this.renderCityComparison()}
					{this.renderNoTrends()}
					{this.renderForceBlack()} */}
					{this.renderNext()}
		  </Layout>
		)
	}
}


export default IndexPage
