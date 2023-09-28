import React, { useContext, useEffect } from "react";
import { useNoteContext } from "../../contexts/noteContext/useNoteContext";
import { useLoaderData } from "react-router-dom";

function Trash() {
	const { setPath } = useNoteContext();
	// const trashNotes = useLoaderData();
	useEffect(() => {
		setPath("Trash");
	}, []);
	return (
		<>
			<h1>No deleted note</h1>
		</>
	);
}

export default Trash;
