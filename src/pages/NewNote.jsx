import React from "react";
import "./NewNote.css";

function NewNote() {
	return (
		<div className="new-note">
			<input placeholder="Title" />
			<textarea placeholder="Note..." />
		</div>
	);
}

export default NewNote;
