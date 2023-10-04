import React from "react";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import bodyScrollToggle from "body-scroll-toggle";

export const Backdrop = () => {
	const { setIsModal } = useNoteContext();
	const handleClick = () => {
		setIsModal(false);
		const navUl = document.querySelector(".nav-ul");
		navUl.classList.remove("active");

		bodyScrollToggle.enable();
		setIsModal(false);
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
