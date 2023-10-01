import { useEffect } from "react";
import { PiNotePencilDuotone } from "react-icons/pi";
import NoteList from "../components/NoteList";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import "./Home.css";
import { NewNoteButton } from "../components/NewNoteButton";

function Home() {
	const { notes, setPath } = useNoteContext();
	useEffect(() => {
		setPath("All Notes");
	}, [setPath]);

	if (notes.length < 1) {
		return (
			<div id="home" className="home-empty">
				<h1>No note yet</h1>
				<p className="para-empty">
					Create <NewNoteButton />a note
				</p>
			</div>
		);
	}

	return (
		<div id="home" className="home">
			<NoteList notes={notes} path={"note"} />
		</div>
	);
}

export default Home;
