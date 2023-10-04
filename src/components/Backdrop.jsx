import React from "react";

export const Backdrop = () => {
	const { setIsModal } = useNoteContext();
	const handleClick = () => {
		setIsModal(false);
		const navUl = document.querySelector(".nav-ul");
		navUl.classList.remove("active");
	};
	return <div className="backdrop" onClick={handleClick}></div>;
};
