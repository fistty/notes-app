import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import bodyScrollToggle from "body-scroll-toggle";
import { enableBodyScroll } from "../utils/helpers/bodyScroll";

export const Backdrop = () => {
	const { setIsBackdrop, setIsModal } = useNoteContext();
	const handleClick = () => {
		const navUl = document.querySelector(".nav-ul");
		navUl.classList.remove("act");

		bodyScrollToggle.enable();
		enableBodyScroll();
		// To remove the bodyScrollToggle in case "bodyScrollToggle.enable()" doesn't work
		const body = document.querySelector("body");
		body.style.overflow = "";
		body.style.position = "";
		body.style.height = "";
		body.style.width = "";
		body.style.top = "";
		setIsBackdrop(false);
		setIsModal(false);
	};
	return <div className="backdrop" onClick={handleClick}></div>;
};
