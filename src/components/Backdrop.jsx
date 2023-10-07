import React from "react";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import bodyScrollToggle from "body-scroll-toggle";
import { removeBodyScroll } from "../utils/helpers/bodyScrollToggle";

export const Backdrop = () => {
	const { setIsBackdrop } = useNoteContext();
	const handleClick = () => {
		setIsBackdrop(false);

		const navUl = document.querySelector(".nav-ul");
		navUl.classList.remove("active");
		navUl.classList.remove("act");

		bodyScrollToggle.enable();
		removeBodyScroll();
		// To remove the bodyScrollToggle in case "bodyScrollToggle.enable()" doesn't work
		const body = document.querySelector("body");
		body.style.overflow = "";
		body.style.position = "";
		body.style.height = "";
		body.style.width = "";
		body.style.top = "";
	};
	return <div className="backdrop" onClick={handleClick}></div>;
};
