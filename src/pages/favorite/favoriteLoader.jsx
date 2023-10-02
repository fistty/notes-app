export const favoriteLoader = (notes) => {
	const favoriteNotes = notes.filter((noteItem) => noteItem.favorite === true);
	return favoriteNotes;
};
