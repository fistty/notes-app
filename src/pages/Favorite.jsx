import React, { useContext, useEffect } from "react";
import { NoteContext } from "../contexts/NoteContext";

function Favorite() {
	const { setPath } = useContext(NoteContext);
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
