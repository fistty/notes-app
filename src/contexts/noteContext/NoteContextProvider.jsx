import React, { useState } from "react";
import { NoteContext } from "./NoteContext";

export const NoteContextProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	const [deletedNotes, setDeletedNotes] = useState([]);
	const [refresh, setRefresh] = useState(true);
	const [path, setPath] = useState("");
	const [isModal, setIsModal] = useState(false);
	return (
		<NoteContext.Provider
			value={{
				notes,
				setNotes,
				deletedNotes,
				setDeletedNotes,
				path,
				setPath,
				isModal,
				setIsModal,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
};
