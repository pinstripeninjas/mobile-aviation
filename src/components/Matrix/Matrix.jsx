import React from "react";
import Spinner from "../Spinner/Spinner";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import MatrixLine from "../MatrixLine/MatrixLine";

const Matrix = ({ forecast, criteria, error }) => {
	if (error === true) {
		return <ErrorMsg message="Something Went Wrong" />;
	}
	if (!forecast) {
		return <Spinner />;
	}

	const dayStyle = {
		padding: "2% 0",
		textAlign: "center",
		borderBottom: "solid 3px var(--dark-gray)",
		fontWeight: "bold",
		color: "var(--dark-gray)",
	};

	// New Date Array
	const dataArray = [];
	for (let i = 0; i < forecast.validPeriod.day.length; i++) {
		dataArray.push(forecast.validPeriod.day[i] + " - " + forecast.validPeriod.date[i]);
	}

	return (
		<div>
			{dataArray.map((day, i) => {
				return (
					<div key={i}>
						<div style={dayStyle}>{day}</div>
						{forecast.forecast.map((field, j) => {
							return (
								<MatrixLine
									key={j}
									name={field.fullName}
									value={field.values[i]}
									dataType={field.dataType}
									category={field.category[i]}
									criteria={criteria.body[j]}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Matrix;
