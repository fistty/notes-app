export const favoriteLoader = ({ params }, notes) => {
	console.log(notes);
	const favoriteNotes = notes.filter((noteItem) => noteItem.favorite === true);
	console.log(favoriteNotes);
	return 2;
};
