import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import TitleInput from "../../components/TitleInput";
import NoteText from "../../components/NoteText";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import bodyScrollToggle from "body-scroll-toggle";
import { DeleteModal } from "../../components/DeleteModal";

export const TrashNote = () => {
	const [title, setTitle] = useState("");
	const [noteText, setNoteText] = useState("");

	// Object returned from loader
	const trashNoteDetail = useLoaderData();

	const { setNotes, setPath, setIsModal, setTrashNotes } = useNoteContext();

	const navigate = useNavigate();

	const handleBackButton = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	const handleDelete = (e) => {
		e.preventDefault();
		bodyScrollToggle.disable();
		setIsModal(true);
	};

	const handleRestore = (e) => {
		e.preventDefault();

		setTrashNotes((prev) => {
			const updatedNotes = [...prev].filter(
				(noteItem) => noteItem.id !== trashNoteDetail.id
			);
			return updatedNotes;
		});
		setNotes((prev) => {
			let updatedNote = [trashNoteDetail, ...prev];
			// Sorts the note array from newest to oldest
			let sortedNote = updatedNote.sort((a, b) => b.createdAt - a.createdAt);
			return sortedNote;
		});

		navigate(-1);
	};

	useEffect(() => {
		setPath("Trash Note");
		window.scrollTo({ top: 0, behavior: "smooth" });
		setNoteText(trashNoteDetail.note);
		setTitle(trashNoteDetail.title);
	}, [setPath, trashNoteDetail]);

	useEffect(() => {
		const nav = document.querySelector(".nav");
		nav.style.position = "relative";
		return () => {
			nav.style.position = "";
		};
	}, []);

	return (
		<div className="trash-note note">
			<DeleteModal
				noteDetail={trashNoteDetail}
				text={"Permanently delete this Note?"}
				deleteButtonText={"Delete Note"}
				permanentDelete={true}
			/>
			<form>
				<div className="title-input-div">
					<button onClick={handleBackButton} className="back-button buttons">
						<FaChevronLeft color="white" size="1.5rem" title="Save" />
					</button>

					<TitleInput title={title} setTitle={setTitle} disabled={true} />

					<button
						onClick={handleRestore}
						className="restore-button trash-buttons buttons"
					>
						Restore
					</button>

					<button
						onClick={handleDelete}
						className="delete-button trash-buttons buttons"
					>
						Delete
					</button>
				</div>
				<NoteText noteText={noteText} setNoteText={setNoteText} disabled={true} />
			</form>
		</div>
	);
};
