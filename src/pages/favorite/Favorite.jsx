import { useEffect } from "react";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import { useLoaderData } from "react-router-dom";
import NoteList from "../../components/NoteList";

function Favorite() {
	const { setPath, setNoteCount } = useNoteContext();
	const favoriteNotes = useLoaderData();
	useEffect(() => {
		setPath("Favorites");
		setNoteCount(favoriteNotes.length);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [setPath]);

	if (favoriteNotes.length < 1) {
		return (
			<div className="home-empty">
				<h1>No favorite note yet</h1>
			</div>
		);
	}

	return (
		<div id="favorite" className="favorite grid">
			<NoteList notes={favoriteNotes} path={"note"} />
		</div>
	);
}

export default Favorite;
