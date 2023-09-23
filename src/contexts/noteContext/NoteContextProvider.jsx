import React, { useState } from "react";
import { NoteContext } from "./NoteContext";

export const NoteContextProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);
	const [refresh, setRefresh] = useState(true);
	const [path, setPath] = useState("");
	return (
		<NoteContext.Provider
			value={{ notes, setNotes, refresh, setRefresh, path, setPath }}
		>
			{children}
		</NoteContext.Provider>
	);
};
