import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FiStar, FiTrash } from "react-icons/fi";
import TitleInput from "../../components/TitleInput";
import NoteText from "../../components/NoteText";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";

export const Note = () => {
	const [title, setTitle] = useState("");
	const [noteText, setNoteText] = useState("");
	const [isSave, setIsSave] = useState(false);

	const noteDetail = useLoaderData();

	const { setNotes, setPath } = useNoteContext();

	const navigate = useNavigate();

	const handleBackButton = (e) => {
		e.preventDefault();

		if (isSave === true) {
			setNotes((prev) => {
				let updatedNotes = prev.map((noteItem) => {
					if (noteDetail.id === noteItem.id) {
						// Updates only the note we are viewing
						return {
							...noteDetail,
							title,
							note: noteText,
							updated: new Date().getTime(),
						};
					}
					// Does not update other notes
					return noteItem;
				});
				return updatedNotes;
			});
		}

		navigate("/");
	};

	const handleButton = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		setPath("Edit Note");
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		setTitle(noteDetail.title);
		setNoteText(noteDetail.note);
	}, []);

	return (
		<div className="new-note note">
			<form action="">
				<div className="title-input-div">
					<button onClick={handleBackButton} className="back-button buttons">
						<FaChevronLeft color="white" size="1.5rem" title="Save" />
					</button>

					<TitleInput title={title} setTitle={setTitle} setSave={setIsSave} />

					<button onClick={handleButton} className="favorite-button buttons">
						<FiStar title="Add to favorite" size="1.5rem" className="favorite-svg" />
					</button>

					<button onClick={handleButton} className="delete-button buttons">
						<FiTrash size="1.4rem" className="delete-svg" title="Delete note" />
					</button>
				</div>
				<NoteText
					noteText={noteText}
					setNoteText={setNoteText}
					setSave={setIsSave}
				/>
			</form>
		</div>
	);
};
