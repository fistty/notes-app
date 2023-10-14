export const trashNoteLoader = ({ params }, deletedNotes) => {
	const { id } = params;
	const deletedNoteDetail = deletedNotes.find((noteItem) => noteItem.id === id);
	if (!deletedNoteDetail) {
		throw new Error("Could not find such note");
	}
	return deletedNoteDetail;
};
