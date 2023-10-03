import { NavLink } from "react-router-dom";
import { NewNoteButton } from "./NewNoteButton";

import "./Nav.css";
import { NavMobile } from "./NavMobile";

function Nav() {
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
