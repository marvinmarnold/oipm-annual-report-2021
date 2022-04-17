import React from "react"
import { Row, Col } from 'reactstrap'

import uofDetails from "../../../data/uof-details-most.json";
import ftnDetails from "../../../data/ftn-details-most.json";

class MostForcefulDetails extends React.Component {
  constructor() {
    super()
    this.state = {
			uof: null,
			ftn: null
		}
  }

  componentDidMount() {
		const newState = {
      uof: uofDetails,
			ftn: ftnDetails
    }

console.log(newState)
    this.setState(newState)
  }

	renderDetails(details, key) {
		return (
			<div key={key}>
				<h6>Among the top {details["Num officers"]} officers using most force:</h6>
				<ul>
					<li>Responsible for {details["Pct of total"]}%</li>
					<li>Number men: {details["Num male"]}</li>
					<li>Age range: {details["Min age"]} - {details["Max age"]}</li>
					<li>Exp range: {details["Min exp"]} - {details["Max exp"]} years</li>
					<li>White: {details["Num white"]},
					Black: {details["Num black"]},
					Latinx: {details["Num hispanic"]},
					Native: {details["Num native"]},
					Asian: {details["Num asian"]}</li>
				</ul>
			</div>
		)
	}

	renderDetailsRow(ftn, uof, i) {
		return (
			<Row key={i} className="mt-4">
				<Col>
					<h4>Force incidents (FTN)</h4>
					{this.renderDetails(ftn, "ftn" + i)}
				</Col>
				<Col>
					<h4>Amount of force (UOF)</h4>
					{this.renderDetails(uof, "uof" + i)}
				</Col>
			</Row>
		)
	}
  render() {
		let rows = []

		if (this.state.uof) {
			for (let i = 0; i < this.state.uof.length; i++) {
				const ftn = this.state.ftn[i]
				const uof = this.state.uof[i]
				rows.push(this.renderDetailsRow(ftn, uof, i))
			}
		}

    return (
			<div>
				{rows}
			</div>
    )
  }
}

export default MostForcefulDetails
