import { useState } from "react";
import { NoteContext } from "./NoteContext";

export const NoteContextProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	const [trashNotes, setTrashNotes] = useState([]);
	const [path, setPath] = useState("");
	const [isModal, setIsModal] = useState(false);
	const [isBackdrop, setIsBackdrop] = useState(false);
	return (
		<NoteContext.Provider
			value={{
				notes,
				setNotes,
				trashNotes,
				setTrashNotes,
				path,
				setPath,
				isModal,
				setIsModal,
				isBackdrop,
				setIsBackdrop,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
};
