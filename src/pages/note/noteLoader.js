export const noteLoader = ({ params }, notes) => {
	const { id } = params;
	const noteDetail = notes.find((noteItem) => noteItem.id == id);
	if (noteDetail) {
		console.log(2);
		return noteDetail;
	} else {
		console.log(404);
		return { title: "...", note: "..." };
	}
};
