import { useContext } from "react";
import { NoteContext } from "./NoteContext";

export const useNoteContext = () => {
	return useContext(NoteContext);
};
