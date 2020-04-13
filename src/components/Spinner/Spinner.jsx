import React from "react";
import "./Spinner.css";

const Spinner = () => {
	return (
		<div className="spinner">
			<div className="sk-chase">
				<div className="sk-chase-dot" />
				<div className="sk-chase-dot" />
				<div className="sk-chase-dot" />
				<div className="sk-chase-dot" />
				<div className="sk-chase-dot" />
				<div className="sk-chase-dot" />
			</div>
			<div className="p-3">Loading...</div>
		</div>
	);
};

export default Spinner;
