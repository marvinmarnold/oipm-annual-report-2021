import React from "react"

import LoadingPlot from "../../../loading-plot"

import rPlotlyExport from "../../../../data/uof-pie-l4-type.json";

class UofPieL4Type extends React.Component {
  constructor() {
    super()
    this.state = {
		}
  }

  componentDidMount() {
		const newState = {
      data: rPlotlyExport.data,
      layout: rPlotlyExport.layout,
			config: rPlotlyExport.config
    }

    this.setState(newState)
  }

  render() {
    return (
			<LoadingPlot
					data={this.state.data}
					layout={this.state.layout}
					config={this.state.config}
					yoffset={-1}
			/>
    )
  }
}

export default UofPieL4Type
