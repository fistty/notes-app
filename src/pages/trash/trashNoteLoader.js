export const trashNoteLoader = ({ params }, deletedNotes) => {
	const { id } = params;
	const deletedNoteDetail = deletedNotes.find((noteItem) => noteItem.id === id);
	if (!deletedNoteDetail) {
		console.log(404);
		return { title: "...", note: "..." };
	}
	return deletedNoteDetail;
};
