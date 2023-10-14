export const noteLoader = async ({ params }, notes) => {
	const { id } = params;
	const noteDetail = await notes.find((noteItem) => noteItem.id === id);
	if (!noteDetail) {
		throw new Error("Could not find such note");
	}
	return noteDetail;
};
