import React from "react";
import "./MatrixLine.css";

const MatrixLine = ({ name, value, criteria }) => {
	console.log(criteria);

	let color = "green";

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

	return (
		<div className={`${color} matrix-line`}>
			<div>{name}</div>
			<div>{value}</div>
		</div>
	);
};

export default MatrixLine;
