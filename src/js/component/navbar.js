import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact List Page</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					
				</Link>
			</div>
		</nav>
	);
};