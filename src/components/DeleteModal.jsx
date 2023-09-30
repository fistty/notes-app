import React from "react";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import bodyScrollToggle from "body-scroll-toggle";
import { useNavigate } from "react-router-dom";

export const DeleteModal = ({
	noteDetail,
	text,
	deleteButtonText,
	permanentDelete,
}) => {
	const { setNotes, isModal, setIsModal, setTrashNotes } = useNoteContext();

	const navigate = useNavigate();

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

	const handleConfirmDelete = () => {
		console.log(2);

		// updates the deleted notes array
		setTrashNotes((prev) => {
			const updatedNotes = [noteDetail, ...prev];
			return updatedNotes;
		});

		// updates the notes array
		setNotes((prev) => {
			const updatedNotes = [...prev].filter(
				(noteItem) => noteItem.id !== noteDetail.id
			);
			return updatedNotes;
		});
		setIsModal(false);
		navigate(-1);
	};

	const handlePermanentDelete = () => {
		console.log(222);
		setTrashNotes((prev) => {
			console.log(prev);
			const updatedNotes = [...prev].filter(
				(noteItem) => noteItem.id !== noteDetail
			);
			console.log(updatedNotes);
			return updatedNotes;
		});
		setIsModal(false);
		navigate(-1);
	};

	return (
		<>
			{isModal && (
				<div className="delete-div">
					<p>{text}</p>
					<div className="button-container">
						<button className="cancel-button" onClick={handleCancelButton}>
							Cancel
						</button>
						<button
							className="delete-button"
							onClick={permanentDelete ? handlePermanentDelete : handleConfirmDelete}
						>
							{deleteButtonText}
						</button>
					</div>
				</div>
			)}
		</>
	);
};
