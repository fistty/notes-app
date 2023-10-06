import React from "react";
import { FaBars } from "react-icons/fa6";
import { NewNoteButton } from "./NewNoteButton";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import bodyScrollToggle from "body-scroll-toggle";

export const NavMobile = () => {
	const { setIsModal } = useNoteContext();

	const handleClick = () => {
		// To get the side menu to stay on top of the screen
		const navUl = document.querySelector(".nav-ul");
		const nav = document.querySelector(".nav");

		// Calculates the distance of the nav element from the top of the page
		// and the distance in which the window has been scrolled
		let offset = nav.offsetTop - window.scrollY;
		navUl.style.top = `-${offset}px`;
		navUl.classList.add("active");
		setIsModal(true);
		bodyScrollToggle.disable();
		// Allows for the hamburger menu to work when not on top

		const body = document.querySelector("body");
		body.style.height = "";
		body.style.overflow = "";
	};
	return (
		<ul className="nav-ul-mobile">
			<li className="nav-mobile-li nav-mobile-bars">
				<button>
					<FaBars
						className="bars"
						size={"1.5rem"}
						color="white"
						onClick={handleClick}
					/>
				</button>
			</li>
			<li className="nav-mobile-li nav-mobile-new">
				<NewNoteButton className="nav-list-new" />
			</li>
		</ul>
	);
};
