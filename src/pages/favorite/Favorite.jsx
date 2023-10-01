import { useEffect } from "react";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import { useLoaderData } from "react-router-dom";
import NoteList from "../../components/NoteList";

function Favorite() {
	const { setPath } = useNoteContext();
	const favoriteNotes = useLoaderData();
	useEffect(() => {
		setPath("Favorites");
	}, [setPath]);

	if (favoriteNotes.length < 1) {
		return (
			<div className="home-empty">
				<h1>No favorite note</h1>
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
