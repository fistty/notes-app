import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ notes }) {
	const dateFormat = (date) => {
		let option = { month: "short", day: "numeric" };
		const formattedDate = new Date(date).toLocaleDateString("en-US", option);
		return formattedDate;
	};
	return (
		<>
			{notes.map((item) => (
				<Link className="note-item" key={item.id} to={`note/${item.id.toString()}`}>
					<p>{item.note}</p>
					<h2>{item.title}</h2>
					<h3>{dateFormat(item.createdAt)} </h3>
				</Link>
			))}
		</>
	);
}

export default NoteItem;
