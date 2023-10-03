import React from "react";
import { FaBars } from "react-icons/fa6";
import { NewNoteButton } from "./NewNoteButton";

export const NavMobile = () => {
	const handleClick = () => {
		const nav = document.querySelector(".nav-ul");
		nav.classList.add("active");
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
