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
				{/* <SlNotebook size={"2rem"} /> */}
				<ul className="nav-ul">
					<li className="nav-list nav-button">
						<button>
							<svg
								stroke="currentColor"
								fill="none"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="h-4 w-4 shrink-0"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line x1="12" y1="5" x2="12" y2="19"></line>
								<line x1="5" y1="12" x2="19" y2="12"></line>
							</svg>{" "}
							All Notes
						</button>
					</li>
					<li className="nav-list">
						<NavLink to="/">All Notes</NavLink>
					</li>
					<li className="nav-list">
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
