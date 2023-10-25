import { useEffect, useState } from "react";
import { NoteContext } from "./NoteContext";

export const NoteContextProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	const [favoriteNotes, setFavoriteNotes] = useState([]);
	const [trashNotes, setTrashNotes] = useState([]);
	const [path, setPath] = useState("");
	const [isModal, setIsModal] = useState(false);
	const [isBackdrop, setIsBackdrop] = useState(false);
	const [noteCount, setNoteCount] = useState(0);

	useEffect(() => {
		const favNotes = notes.filter((noteItem) => noteItem.favorite === true);
		setFavoriteNotes(favNotes);
	}, [notes]);

	useEffect(() => {
		switch (path) {
			case "All Notes":
				setNoteCount(parseInt(notes.length));
				break;

			case "Favorites":
				setNoteCount(parseInt(favoriteNotes.length));
				break;

			case "Trash":
				setNoteCount(parseInt(trashNotes.length));
				break;

			default:
				return setNoteCount(null);
		}
	}, [path, notes, favoriteNotes, trashNotes]);

	return (
		<NoteContext.Provider
			value={{
				notes,
				setNotes,
				favoriteNotes,
				trashNotes,
				setTrashNotes,
				path,
				setPath,
				isModal,
				setIsModal,
				isBackdrop,
				setIsBackdrop,
				noteCount,
				setNoteCount,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
};
