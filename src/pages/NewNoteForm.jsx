import React, { useContext, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiStar, FiTrash } from "react-icons/fi";
import "./NewNote.css";
import TitleInput from "../components/TitleInput";
import NoteText from "../components/NoteText";
import { generateUniqueId } from "../helpers/generateRandomId";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";

function NewNoteForm() {
	const [title, setTitle] = useState("This is the Title ");
	const [noteText, setNoteText] = useState("This is the note ");

	const { setNotes, setPath, refresh, setRefresh } = useNoteContext();
	const navigate = useNavigate();

	const handleBackButton = (e) => {
		e.preventDefault();

		if (title.length > 0 || noteText.length > 0) {
			const id = generateUniqueId();
			const newNoteObj = { id, title, note: noteText, favorite: false };
			setNotes((prev) => {
				const temp = [...prev];
				temp.push(newNoteObj);
				return temp;
			});
			setRefresh(!refresh);
		}

		navigate("/");
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
				<NoteText noteText={noteText} setNoteText={setNoteText} />
			</form>
		</div>
	);
}

export default NewNoteForm;
