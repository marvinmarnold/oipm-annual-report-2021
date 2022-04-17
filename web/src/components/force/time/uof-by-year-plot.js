import React from "react"

import LoadingPlot from "../../loading-plot"

import uofByYear from "../../../data/uof-by-year.json";

class UofByYearPlot extends React.Component {
  constructor() {
    super()
    this.state = {
		}
  }

  componentDidMount() {
		const newState = {
      data: uofByYear.data,
      layout: uofByYear.layout,
			config: uofByYear.config
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

export default UofByYearPlot
