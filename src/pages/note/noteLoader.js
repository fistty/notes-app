export const noteLoader = ({ params }, notes) => {
	const { id } = params;
	const noteDetail = notes.find((noteItem) => noteItem.id === id);
	if (!noteDetail) {
		// console.log(404, "from NOTELOADER");
		return { title: "...", note: "..." };
	}
	return noteDetail;
};
