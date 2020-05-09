import React from "react";
import "./Criteria.css";

const Criteria = ({ name, criteria, location }) => {
	const distanceFromTop = `${location - 90}px`;

	return (
		<div className="criteria-popup" style={{ top: distanceFromTop }}>
			<div className="criteria-name">{name}</div>
			<div className="criteria-table">
				<div className="green">{criteria.noWx}</div>
				<div className="yellow">{criteria.modWx}</div>
				<div className="red">{criteria.majWx}</div>
			</div>
		</div>
	);
};

export default Criteria;
