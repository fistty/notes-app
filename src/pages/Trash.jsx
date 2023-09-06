import React, { useContext, useEffect } from "react";
import { NoteContext } from "../contexts/NoteContext";

function Trash() {
	const { setPath } = useContext(NoteContext);
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
