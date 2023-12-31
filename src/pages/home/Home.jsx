import { useEffect } from "react";
import NoteList from "../../components/NoteList";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import { NewNoteButton } from "../../components/NewNoteButton";
import "./Home.css";

function Home() {
	const { notes, setPath, setNoteCount } = useNoteContext();
	useEffect(() => {
		setPath("All Notes");
		setNoteCount(notes.length);
		window.scrollTo({ top: 0, behavior: "instant" });
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
