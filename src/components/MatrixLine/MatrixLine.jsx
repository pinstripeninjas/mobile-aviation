import React from "react";
import "./MatrixLine.css";

const MatrixLine = ({ name, dataType, category, value, criteria }) => {
	//console.log(dataType);

	let color = "green";

	// check if data is from a dropdown option, then compare category
	if (dataType === "dropdown") {
		if (category === 2) {
			color = "red";
		} else if (category === 1) {
			color = "yellow";
		}
	} else {
		// check if variable is sfc wind to remove directional component
		if (name === "Max Surface Wind") {
			value = Number(value.slice(2));
		}

		// return color for associated class
		if (value > criteria.yellow) {
			color = "red";
		} else if (value > criteria.green) {
			color = "yellow";
		}
	}

	return (
		<div className={`${color} matrix-line`}>
			<div>{name}</div>
			<div>{value}</div>
		</div>
	);
};

export default MatrixLine;
