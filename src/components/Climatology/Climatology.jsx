import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./Climatology.css";

class Climatology extends Component {
	state = {
		data: {
			labels: [],
			datasets: [],
		},
	};

	colors = {
		max: "#E81D11",
		"90th": "#FF931F",
		mean: "#333",
		"10th": "#6EAF3D",
	};

	urlClimatology = "https://extendsclass.com/api/json-storage/bin/cbadfce";

	componentDidMount() {
		axios.get(this.urlClimatology).then((res) => {
			this.setState({ data: { labels: res.data.labels } });

			// Fill datasets as one array of objects
			const newDataArray = [];
			for (let i = 0; i < res.data.datasetLabels.length; i++) {
				const newDataObj = {};
				newDataObj.label = res.data.datasetLabels[i];
				newDataObj.borderColor = this.colors[res.data.datasetLabels[i]];
				newDataObj.backgroundColor = "rgba(0,0,0,0)";
				newDataObj.lineTension = 0.3;
				// get data array based on datasetLabel
				newDataObj.data = res.data.datasetByLabel[res.data.datasetLabels[i]];
				newDataArray.push(newDataObj);
			}

			// setState with new array of chart data
			this.setState({ data: { labels: res.data.labels, datasets: newDataArray } });
			console.log("climate request made");
		});
	}

	render() {
		return (
			<div className="climatology">
				<Line
					options={{
						responsive: true,
						maintainAspectRatio: false,
						title: {
							display: true,
							text: "Density Altitude By Month - KTUS",
							fontSize: 20,
						},
					}}
					data={this.state.data}
				/>
			</div>
		);
	}
}

export default Climatology;
