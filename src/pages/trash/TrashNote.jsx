import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FiStar, FiTrash } from "react-icons/fi";
import TitleInput from "../../components/TitleInput";
import NoteText from "../../components/NoteText";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import bodyScrollToggle from "body-scroll-toggle";
import { DeleteModal } from "../../components/DeleteModal";

export const TrashNote = () => {
	const [title, setTitle] = useState("");
	const [noteText, setNoteText] = useState("");
	const [isFavorite, setIsFavorite] = useState(false);

	// Object returned from loader
	const trashNoteDetail = useLoaderData();

	const { setPath, setIsModal } = useNoteContext();

	const navigate = useNavigate();

	const handleBackButton = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	const handleDelete = (e) => {
		e.preventDefault();
		setIsModal(true);
		bodyScrollToggle.disable();
	};

	useEffect(() => {
		setPath("Edit Note");
		window.scrollTo({ top: 0, behavior: "smooth" });
		setNoteText(trashNoteDetail.note);
		setTitle(trashNoteDetail.title);
		setIsFavorite(trashNoteDetail.favorite);
	}, [trashNoteDetail]);

	return (
		<div className="trash-note note">
			<DeleteModal
				noteDetail={trashNoteDetail}
				text={"Permanently Delete this Note?"}
			/>
			<form>
				<div className="title-input-div">
					<button onClick={handleBackButton} className="back-button buttons">
						<FaChevronLeft color="white" size="1.5rem" title="Save" />
					</button>

					<TitleInput title={title} setTitle={setTitle} disabled={true} />

					<button className="restore-button trash-buttons buttons">Restore</button>

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
