import React from "react";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import bodyScrollToggle from "body-scroll-toggle";

export const DeleteModal = ({ noteDetail }) => {
	const { isModal, setIsModal, setDeletedNotes, deletedNotes } =
		useNoteContext();

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
		console.log(noteDetail);
		setDeletedNotes((prev) => {
			console.log(deletedNotes);
			const temp = [...prev];
			const updatedNotes = temp.concat(noteDetail);
			return updatedNotes;
		});
	};

	return (
		<>
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
		</>
	);
};
