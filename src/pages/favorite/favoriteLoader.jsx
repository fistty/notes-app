export const favoriteLoader = ({ params }, notes) => {
	const favoriteNotes = notes.filter((noteItem) => noteItem.favorite === true);
	// console.log(favoriteNotes);
	return favoriteNotes;
};
