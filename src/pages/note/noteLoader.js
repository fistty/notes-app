import { useNoteContext } from "../../contexts/noteContext/useNoteContext";

export const noteLoader = async ({ params }, notes) => {
	const { id } = params;
	const noteDetail = notes.find((noteItem) => noteItem.id === id);
	return noteDetail;
};
