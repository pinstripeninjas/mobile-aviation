import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Matrix from "./components/Matrix/Matrix";
import Climatology from "./components/Climatology/Climatology";

class App extends Component {
	state = {
		matrixForecast: null,
		matrixCriteria: null,
		error: false,
	};

	urlForecast = "https://extendsclass.com/api/json-storage/bin/cfbaeae";
	urlCriteria = "https://extendsclass.com/api/json-storage/bin/cbdbfad";

	componentDidMount() {
		axios.all([axios.get(this.urlForecast), axios.get(this.urlCriteria)]).then(
			axios.spread((forecast, criteria) => {
				this.setState({
					matrixForecast: forecast.data,
					matrixCriteria: criteria.data,
				});
				// check if status on both requests is 200
				if (forecast.status !== 200 || criteria.status !== 200) {
					this.setState({ error: true });
				}
				console.log("forecast request made");
			})
		);
	}

	render() {
		return (
			<Router>
				<div>
					<Navbar title="Fire Wx" />
					<Switch>
						<Route path="/mobile-aviation" exact>
							<Matrix
								forecast={this.state.matrixForecast}
								criteria={this.state.matrixCriteria}
								error={this.state.error}
							/>
						</Route>
						<Route path="/mobile-aviation/climatology" exact>
							<Climatology />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
