import bodyScrollToggle from "body-scroll-toggle";

export const disableBodyScroll = () => {
	const navUl = document.querySelector(".nav-ul");
	navUl.classList.remove("active");
	navUl.classList.remove("act");
	bodyScrollToggle.enable();
	// To remove the bodyScrollToggle in case "bodyScrollToggle.enable()" doesn't work
	const body = document.querySelector("body");
	body.style.overflow = "";
	body.style.position = "";
	body.style.height = "";
	body.style.width = "";
	body.style.top = "";
};
