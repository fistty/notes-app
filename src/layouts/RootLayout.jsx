import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
import "./RootLayout.css";

function RootLayout() {
	return (
		<div className="root-layout">
			<h1 className="root-h1">All Notes</h1>
			<nav className="nav">
				{/* <SlNotebook size={"2rem"} /> */}
				<ul className="nav-ul">
					<li className="nav-list">
						{" "}
						<NavLink to="/">All Notes</NavLink>
					</li>
					<li className="nav-list">
						{" "}
						<NavLink to="/favorite">Favorites</NavLink>
					</li>
					<li className="nav-list">
						<NavLink to="/trash">Trash</NavLink>
					</li>
				</ul>
			</nav>

			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;
