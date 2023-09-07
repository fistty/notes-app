import React, { useContext, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "../contexts/NoteContext";
import { FiStar, FiTrash } from "react-icons/fi";
import "./NewNote.css";

function NewNote() {
	const { setPath } = useContext(NoteContext);
	const navigate = useNavigate();
	const handleBackButton = (e) => {
		e.preventDefault();
		navigate("/");

		console.log("back clicked");
	};

	const handleButton = (e) => {
		e.preventDefault();
	};
	useEffect(() => {
		setPath("New Note");
	}, []);
	return (
		<div className="new-note">
			<form action="">
				<div className="title-input-div">
					<button onClick={handleBackButton} className="back-button buttons">
						<FaChevronLeft color="white" size="1.5rem" title="Save" />
					</button>
					<input className="title-input" placeholder="Title" />
					<button onClick={handleButton} className="favorite-button buttons">
						<FiStar title="Add to favorite" size="1.5rem" className="favorite-svg" />
					</button>
					<button onClick={handleButton} className="delete-button buttons">
						<FiTrash size="1.4rem" className="delete-svg" title="Delete note" />
					</button>
					{/* <button onClick={handleButton} className="save-button buttons">
						<FiSave size="1.6rem" className="save-svg" title="Save Note" />
					</button> */}
				</div>
				<textarea placeholder="Note..." />
			</form>
		</div>
	);
}

export default NewNote;
