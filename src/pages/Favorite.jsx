import React, { useContext, useEffect } from "react";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";

function Favorite() {
	const { notes, setPath } = useNoteContext();
	useEffect(() => {
		setPath("Favorites");
	}, []);
	return (
		<>
			<h1>No favorites yet</h1>
		</>
	);
}

export default Favorite;
