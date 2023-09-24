export const noteLoader = async ({ params }, notes) => {
	const { id } = params;
	const noteDetail = notes.find((noteItem) => noteItem.id === id);
	if (!noteDetail) {
		console.log(232);
		return null;
	}
	return noteDetail;
};
