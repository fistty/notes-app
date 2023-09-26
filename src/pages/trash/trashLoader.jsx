export const trashLoader = ({ params }, notes) => {
	const trashNotes = notes.filter((noteItem) => noteItem.favorite === true);
	return trashNotes;
};
