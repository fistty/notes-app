import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ notes }) {
	return (
		<>
			{notes.map((item) => (
				<Link className="note-item" key={item.id} to={`note/${item.id.toString()}`}>
					<p>{item.note}</p>
					<h2>{item.title}</h2>
				</Link>
			))}
		</>
	);
}

export default NoteItem;
