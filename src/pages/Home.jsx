import React, { useContext, useEffect } from "react";
import { PiNotePencilDuotone } from "react-icons/pi";
import NoteItem from "../components/NoteItem";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import "./Home.css";

function Home() {
	const { notes, setPath } = useNoteContext();
	useEffect(() => {
		setPath("All Notes");
	}, []);

	if (notes.length < 1) {
		return (
			<div id="home" className="home-empty">
				<h1>No notes yet</h1>
				<p className="para-empty">Tap the New Note button to create a note</p>
			</div>
		);
	}

	return (
		<div id="home" className="home">
			<NoteItem notes={notes} />
		</div>
	);
}

export default Home;
