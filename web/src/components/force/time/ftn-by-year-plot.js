import React from "react"

import LoadingPlot from "../../loading-plot"

import ftnByYear from "../../../data/ftn-by-year.json";

class FtnByYearPlot extends React.Component {
  constructor() {
    super()
    this.state = {
		}
  }

  componentDidMount() {
		const newState = {
      data: ftnByYear.data,
      layout: ftnByYear.layout,
			config: ftnByYear.config
    }

    this.setState(newState)
  }

  render() {
    return (
			<LoadingPlot
					data={this.state.data}
					layout={this.state.layout}
					config={this.state.config}
			/>
    )
  }
}

export default FtnByYearPlot
