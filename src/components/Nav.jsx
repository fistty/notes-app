import { NavLink } from "react-router-dom";
import { NewNoteButton } from "./NewNoteButton";
import { NavMobile } from "./NavMobile";
import { useEffect } from "react";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import { removeBodyScroll } from "../helpers/removeBodyScroll";
import "./Nav.css";

function Nav() {
	const { setIsModal } = useNoteContext();

	useEffect(() => {
		const navList = document.querySelectorAll(".nav-list");

		navList.forEach((item) =>
			item.addEventListener("click", () => {
				setIsModal(false);
				removeBodyScroll();
			})
		);
	}, []);

	return (
		<nav className="nav">
			<NavMobile />
			<ul className="nav-ul">
				<li className="nav-list nav-list-new">
					<NewNoteButton />
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
	);
}

export default Nav;
