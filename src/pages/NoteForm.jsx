import React, { useContext, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "../contexts/NoteContext";
import { FiStar, FiTrash } from "react-icons/fi";
import "./NewNote.css";
import TitleInput from "../components/TitleInput";
import NoteInput from "../components/NoteInput";

function NoteForm() {
	const [title, setTitle] = useState("");
	const [noteText, setNoteText] = useState("");

	const { notesArr, setPath, refresh, setRefresh } = useContext(NoteContext);
	const navigate = useNavigate();

	const handleBackButton = (e) => {
		e.preventDefault();

		if (title.length > 0 || noteText.length > 0) {
			const id = new Date().getTime();
			const newNoteObj = { id, note: noteText, favorite: false };
			notesArr.push(newNoteObj);
			localStorage.setItem("notes", JSON.stringify(notesArr));
			setRefresh(!refresh);
		}

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
					<TitleInput title={title} setTitle={setTitle} />
					<button onClick={handleButton} className="favorite-button buttons">
						<FiStar title="Add to favorite" size="1.5rem" className="favorite-svg" />
					</button>
					<button onClick={handleButton} className="delete-button buttons">
						<FiTrash size="1.4rem" className="delete-svg" title="Delete note" />
					</button>
				</div>
				<NoteInput noteText={noteText} setNoteText={setNoteText} />
			</form>
		</div>
	);
}

export default NoteForm;
