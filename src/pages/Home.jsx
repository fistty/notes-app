import React, { useContext, useEffect } from "react";
import { PiNotePencilDuotone } from "react-icons/pi";
import { NoteContext } from "../contexts/NoteContext";
import "./Home.css";

function Home() {
	const { path, setPath } = useContext(NoteContext);
	useEffect(() => {
		setPath("All Notes");
	}, []);
	return (
		<div id="home" className="home">
			<h1>No notes yet</h1>
			<p>Tap the Add button to create a note</p>
		</div>
	);
}

export default Home;
