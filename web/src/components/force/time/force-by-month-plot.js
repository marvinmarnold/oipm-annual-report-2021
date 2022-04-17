import React from "react"

import LoadingPlot from "../../loading-plot"

import forceByMonth from "../../../data/force-by-month.json";

class ForceByMonthPlot extends React.Component {
  constructor() {
    super()
    this.state = {
		}
  }

  componentDidMount() {
		const newState = {
      data: forceByMonth.data,
      layout: forceByMonth.layout,
			config: forceByMonth.config
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

export default ForceByMonthPlot
