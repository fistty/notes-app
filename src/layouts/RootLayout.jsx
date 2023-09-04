import React, { useContext, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { PathContext } from "../contexts/pathContext";
import "./RootLayout.css";

function RootLayout() {
	const { path } = useContext(PathContext);

	return (
		<div className="root-layout">
			<h1 className="root-h1">{path}</h1>
			<nav className="nav">
				<ul className="nav-ul">
					<li className="nav-list nav-list-new">
						<NavLink className="nav-new" to="/new">
							<svg
								stroke="currentColor"
								fill="none"
								strokeWidth="2"
								viewBox="0 0 24 24"
								strokeLinecap="round"
								strokeLinejoin="round"
								height="1.1rem"
								width="1.1rem"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line x1="12" y1="5" x2="12" y2="19"></line>
								<line x1="5" y1="12" x2="19" y2="12"></line>
							</svg>{" "}
							New Note...
						</NavLink>
					</li>
					<li className="nav-list">
						<NavLink className="nav-a" to="/">
							All Notes
						</NavLink>
					</li>
					<li className="nav-list">
						<NavLink className="nav-a" to="/favorite">
							Favorites
						</NavLink>
					</li>
					<li className="nav-list">
						<NavLink className="nav-a" to="/trash">
							Trash
						</NavLink>
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
