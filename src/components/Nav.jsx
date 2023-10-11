import { NavLink } from "react-router-dom";
import { NewNoteButton } from "./NewNoteButton";
import { NavMobile } from "./NavMobile";
import { useEffect } from "react";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import { enableBodyScroll } from "../utils/helpers/bodyScroll";
import { SlNotebook } from "react-icons/sl";
import { FiStar, FiTrash2 } from "react-icons/fi";
import "./Nav.css";

function Nav() {
	const { notes, favoriteNotes, trashNotes, setIsBackdrop } = useNoteContext();

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
				<li className="nav-list" data-count="all-notes">
					<NavLink className="nav-a" to="/">
						<span>
							<SlNotebook />
						</span>
						All Notes
					</NavLink>
					<span className="nav-list-note-count">{notes.length}</span>
				</li>
				<li className="nav-list" data-count="favorite">
					<NavLink className="nav-a" to="/favorite">
						<span>
							<FiStar />
						</span>
						Favorites
					</NavLink>

					<span className="nav-list-note-count">{favoriteNotes.length}</span>
				</li>
				<li className="nav-list" data-count="trash">
					<NavLink className="nav-a" to="/trash">
						<span>
							<FiTrash2 />
						</span>
						Trash
					</NavLink>
					<span className="nav-list-note-count">{trashNotes.length}</span>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
