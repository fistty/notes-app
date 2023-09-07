import React from "react";

function NoteItem({ notes }) {
	return (
		<div>
			<h2>{notes.title}</h2>
			<p>{notes.text}</p>
		</div>
	);
}

export default NoteItem;
