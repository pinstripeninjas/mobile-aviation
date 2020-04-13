import React from "react";

const ErrorMsg = (props) => {
	const style = {
		textAlign: "center",
		color: "var(--primary-blue)",
		position: "absolute",
		top: "50%",
		width: "100%",
		height: "40%",
		margin: "-25% 0 0 0",
		fontSize: "1.3rem",
	};

	return (
		<div style={style}>
			<i className="fas fa-sad-tear p-2" style={{ fontSize: "5rem" }}></i>
			<p>{props.message}</p>
		</div>
	);
};

export default ErrorMsg;
