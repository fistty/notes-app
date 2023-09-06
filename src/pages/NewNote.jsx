import React, { useContext, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "../contexts/NoteContext";
import "./NewNote.css";

function NewNote() {
	const { setPath } = useContext(NoteContext);
	const navigate = useNavigate();
	const handleBackButton = (e) => {
		e.preventDefault();
		navigate(-1);

		console.log("back clicked");
	};
	useEffect(() => {
		setPath("New Note");
	}, []);
	return (
		<div className="new-note">
			<form action="">
				<div className="title-input-div">
					<button onClick={handleBackButton} className="back-button">
						<FaChevronLeft color="white" size="1.5rem" />
					</button>
					<input className="title-input" placeholder="Title" />
				</div>
				<textarea placeholder="Note..." />
			</form>
		</div>
	);
}

export default NewNote;
