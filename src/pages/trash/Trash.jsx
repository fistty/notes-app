import { useEffect } from "react";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import { useLoaderData } from "react-router-dom";
import NoteList from "../../components/NoteList";

function Trash() {
	const { setPath, setNoteCount } = useNoteContext();
	const trashNotes = useLoaderData();

	useEffect(() => {
		setPath("Trash");
		setNoteCount(trashNotes.length);
	}, [setPath]);

	if (trashNotes.length < 1) {
		return (
			<div className="home-empty">
				<h1>No deleted note yet</h1>
			</div>
		);
	}
	return (
		<div id="trash" className="trash grid">
			<NoteList notes={trashNotes} path={"trash"} />
		</div>
	);
}

export default Trash;
