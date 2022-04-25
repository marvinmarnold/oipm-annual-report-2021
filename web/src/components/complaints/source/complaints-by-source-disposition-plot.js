import React from "react"

import LoadingPlot from "../../loading-plot"

import rPlotlyExport from "../../../data/complaints-by-source-disposition.json";

class ComplaintsBySourceDisposition extends React.Component {
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
					layoutOverride={this.state.layout}
					config={this.state.config}
					yoffset={-1}
			/>
    )
  }
}

export default ComplaintsBySourceDisposition
