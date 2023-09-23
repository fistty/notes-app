import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function NoteItem({ notes }) {
	const loaded = useLoaderData();
	console.log(loaded);
	return (
		<>
			{notes.map((item) => (
				<Link className="note-item" key={item.id} to="/note/3434">
					<p>{item.note}</p>
					<h2>{item.title}</h2>
				</Link>
			))}
		</>
	);
}

export default NoteItem;
