import React from "react";
import "./Criteria.css";

const Criteria = ({ name, criteria }) => {
	return (
		<div className="criteria-popup">
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
