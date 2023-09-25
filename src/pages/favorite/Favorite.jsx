import React, { useContext, useEffect } from "react";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import { useLoaderData } from "react-router-dom";

function Favorite() {
	const { setPath } = useNoteContext();
	const id = useLoaderData();
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
