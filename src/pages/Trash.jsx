import React, { useContext, useEffect } from "react";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";

function Trash() {
	const { setPath } = useNoteContext();
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
