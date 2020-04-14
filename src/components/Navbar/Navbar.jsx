import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
	return (
		<nav>
			<div className="nav-title">
				<i className="fas fa-fire"></i>
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
	);
};

export default Navbar;
