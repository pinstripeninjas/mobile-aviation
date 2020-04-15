import React, { Component, Fragment } from "react";
import Criteria from "../Criteria/Criteria";
import "./MatrixLine.css";

class MatrixLine extends Component {
	state = { clickCriteria: false };

	render() {
		let { name, dataType, category, value, criteria } = this.props;

		// set initial color
		let color = "green";

		// variable to handle setTimeout/clearTimeout
		let timeout;

		const handleClickCriteria = () => {
			timeout = setTimeout(() => this.setState({ clickCriteria: true }), 1000);
		};

		const handleReleaseCriteria = () => {
			this.setState({ clickCriteria: false });
			clearTimeout(timeout);
		};

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
			<Fragment>
				{this.state.clickCriteria ? <Criteria name={name} criteria={criteria} /> : null}
				<div
					className={`${color} matrix-line`}
					onTouchStart={handleClickCriteria}
					onTouchEnd={handleReleaseCriteria}
					onMouseDown={handleClickCriteria}
					onMouseUp={handleReleaseCriteria}>
					<div>{name}</div>
					<div>{value}</div>
				</div>
			</Fragment>
		);
	}
}

export default MatrixLine;
