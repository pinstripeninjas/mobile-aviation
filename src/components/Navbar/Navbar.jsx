import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = (props) => {
	return (
		<div className="fixed-nav-msg">
			<nav>
				<div className="nav-title">
					<i className="fas fa-plane"></i>
					{props.title}
				</div>
				<div>
					<ul>
						<NavLink to="/mobile-aviation" exact activeClassName="active-nav">
							<li>Matrix</li>
						</NavLink>
						<NavLink to="/mobile-aviation/climatology" exact activeClassName="active-nav">
							<li>Climatology</li>
						</NavLink>
					</ul>
				</div>
			</nav>
			<div className="criteria-pro-tip">
				<p>***EXPERIMENTAL***</p>
				<p>
					Click and hold on forecast field for criteria
					<i style={{ marginLeft: "5px" }} className="fas fa-arrow-circle-down"></i>
				</p>
			</div>
		</div>
	);
};

export default Navbar;
