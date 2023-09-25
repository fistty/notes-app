import React, { useContext, useEffect } from "react";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import { useLoaderData } from "react-router-dom";
import NoteList from "../../components/NoteList";

function Favorite() {
	const { setPath } = useNoteContext();
	const favoriteNotes = useLoaderData();
	useEffect(() => {
		setPath("Favorites");
	}, []);
	return (
		<div id="favorite" className="favorite grid">
			<NoteList notes={favoriteNotes} />
		</div>
	);
}

export default Favorite;
