import { NavLink } from "react-router-dom";
import { NewNoteButton } from "./NewNoteButton";
import { NavMobile } from "./NavMobile";
import { useEffect } from "react";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import { enableBodyScroll } from "../utils/helpers/bodyScroll";
import { SlNotebook } from "react-icons/sl";
import "./Nav.css";
import { FiStar, FiTrash2 } from "react-icons/fi";

function Nav() {
	const { setIsBackdrop } = useNoteContext();

	useEffect(() => {
		const navList = document.querySelectorAll(".nav-list");

		navList.forEach((item) =>
			item.addEventListener("click", () => {
				setIsBackdrop(false);
				enableBodyScroll();
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
						<span>
							<SlNotebook />
						</span>
						All Notes
					</NavLink>
				</li>
				<li className="nav-list">
					<NavLink className="nav-a" to="/favorite">
						<span>
							<FiStar />
						</span>
						Favorites
					</NavLink>
				</li>
				<li className="nav-list">
					<NavLink className="nav-a" to="/trash">
						<span>
							<FiTrash2 />
						</span>
						Trash
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
