export const favoriteLoader = ({ params }, notes) => {
	const favoriteNotes = notes.filter((noteItem) => noteItem.favorite === true);
	return favoriteNotes;
};
