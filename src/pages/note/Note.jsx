import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FiStar, FiTrash } from "react-icons/fi";
import TitleInput from "../../components/TitleInput";
import NoteText from "../../components/NoteText";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import "./Note.css";
import bodyScrollToggle from "body-scroll-toggle";

export const Note = () => {
	const [title, setTitle] = useState("");
	const [noteText, setNoteText] = useState("");
	const [isFavorite, setIsFavorite] = useState(false);

	// Checks if a note should be saved
	const [isSave, setIsSave] = useState(false);

	// Object returned from loader
	const noteDetail = useLoaderData();

	const {
		setNotes,
		setPath,
		deletedNotes,
		setDeletedNotes,
		isModal,
		setIsModal,
	} = useNoteContext();

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
							favorite: isFavorite,
							title,
							note: noteText,
							updated: new Date().getTime(),
						};
					}
					// Does not update other notes
					return noteItem;
				});
				console.log(updatedNotes);
				return updatedNotes;
			});
		}

		navigate(-1);
	};

	const handleFavorite = (e) => {
		e.preventDefault();
		setIsSave(true);
		setIsFavorite(!isFavorite);
	};

	const handleCancelButton = () => {
		bodyScrollToggle.enable();
		setIsModal(false);
		// To remove the bodyScrollToggle in case it didn't work
		const body = document.querySelector("body");
		body.style.overflow = "";
		body.style.position = "";
		body.style.height = "";
		body.style.width = "";
		body.style.top = "";
	};

	const handleDelete = (e) => {
		e.preventDefault();
		setIsModal(true);
		bodyScrollToggle.disable();
	};

	useEffect(() => {
		setPath("Edit Note");
		window.scrollTo({ top: 0, behavior: "smooth" });
		setNoteText(noteDetail.note);
		setTitle(noteDetail.title);
		setIsFavorite(noteDetail.favorite);
	}, [noteDetail]);

	const handleConfirmDelete = () => {
		setDeletedNotes((prev) => {
			console.log(prev);
		});
	};
	return (
		<div className="new-note note">
			{isModal && (
				<div className="delete-div">
					<p>Move note to the Trash?</p>
					<div className="button-container">
						<button className="cancel-button" onClick={handleCancelButton}>
							Cancel
						</button>
						<button className="delete-button" onClick={handleConfirmDelete}>
							Move to Trash
						</button>
					</div>
				</div>
			)}
			<form>
				<div className="title-input-div">
					<button onClick={handleBackButton} className="back-button buttons">
						<FaChevronLeft color="white" size="1.5rem" title="Save" />
					</button>

					<TitleInput title={title} setTitle={setTitle} setSave={setIsSave} />

					<button onClick={handleFavorite} className="favorite-button buttons">
						<FiStar
							title="Add to favorite"
							size="1.5rem"
							className={isFavorite === true ? "favorite-svg active" : "favorite-svg"}
						/>
					</button>

					<button onClick={handleDelete} className="trash-button buttons">
						<FiTrash size="1.4rem" className="trash-svg" title="Delete note" />
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
