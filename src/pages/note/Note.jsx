import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FiStar, FiTrash2 } from "react-icons/fi";
import TitleInput from "../../components/TitleInput";
import NoteText from "../../components/NoteText";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import { DeleteModal } from "../../components/DeleteModal";
import { disableBodyScroll } from "../../utils/helpers/bodyScroll";

export const Note = () => {
	const [title, setTitle] = useState("");
	const [noteText, setNoteText] = useState("");
	const [isFavorite, setIsFavorite] = useState(false);

	// Checks if a note should be saved
	const [isSave, setIsSave] = useState(false);

	// Object returned from loader
	const noteDetail = useLoaderData();

	const { setNotes, setPath, setIsModal } = useNoteContext();

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

	const handleDelete = (e) => {
		e.preventDefault();
		// Toggles DeleteModal component
		setIsModal(true);
		disableBodyScroll();
	};

	useEffect(() => {
		setPath("Edit Note");
		window.scrollTo({ top: 0, behavior: "smooth" });
		setNoteText(noteDetail.note);
		setTitle(noteDetail.title);
		setIsFavorite(noteDetail.favorite);
	}, [setPath, noteDetail]);

	useEffect(() => {
		const nav = document.querySelector(".nav");
		nav.style.position = "relative";
		return () => {
			nav.style.position = "";
		};
	}, []);

	useEffect(() => {
		const preventExit = function (e) {
			e.preventDefault();
		};

		window.addEventListener("beforeunload", preventExit);

		return () => {
			window.removeEventListener("beforeunload", preventExit);
			console.log("DID");
		};
	}, []);

	return (
		<div className="new-note note">
			<DeleteModal
				noteDetail={noteDetail}
				text={"Move note to the Trash?"}
				deleteButtonText={"Move to Trash"}
			/>
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
						<FiTrash2 size="1.4rem" className="trash-svg" title="Delete note" />
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
