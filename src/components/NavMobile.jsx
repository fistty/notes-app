import { FaBars } from "react-icons/fa6";
import { NewNoteButton } from "./NewNoteButton";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import { disableBodyScroll } from "../utils/helpers/bodyScroll";
import { Backdrop } from "./Backdrop";
export const NavMobile = () => {
	const { isBackdrop, isModal, setIsBackdrop } = useNoteContext();

	const handleClick = () => {
		// To get the side menu to stay on top of the screen
		const navUl = document.querySelector(".nav-ul");
		navUl.classList.add("act");
		setIsBackdrop(true);
		disableBodyScroll();
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
				{(isModal || isBackdrop) && <Backdrop />}
				<NewNoteButton className="nav-list-new" />
			</li>
		</ul>
	);
};
