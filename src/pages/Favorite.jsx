import React, { useContext, useEffect } from "react";
import { NoteContext } from "../contexts/NoteContext";

function Favorite() {
	const { notes, setPath } = useContext(NoteContext);
	useEffect(() => {
		setPath("Favorites");
		console.log(notes);
	}, []);
	return (
		<>
			<h1>No favorites yet</h1>
		</>
	);
}

export default Favorite;
