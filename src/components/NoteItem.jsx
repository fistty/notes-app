import React from "react";
import "./NoteItem.css";

function NoteItem({ notes }) {
	return (
		<>
			{notes.map((item) => (
				<div className="note-item" key={item.id}>
					<p>{item.note}</p>
					<h2>{item.title}</h2>
				</div>
			))}
		</>
	);
}

export default NoteItem;
