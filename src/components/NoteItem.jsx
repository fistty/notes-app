import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ notes }) {
	const dateFormat = (date) => {
		let option = { month: "short", day: "numeric", weekday: "short" };
		const formattedDate = new Date(date).toLocaleDateString("en-US", option);
		return formattedDate;
	};

	const handleNoTitle = (title) => {
		if (/[^ ]/.test(title) === false) {
			return "No Title";
		} else return title;
	};

	return (
		<>
			{notes.map((item) => (
				<Link className="note-item" key={item.id} to={`note/${item.id.toString()}`}>
					<p>{item.note}</p>
					<h2>{handleNoTitle(item.title)}</h2>
					<h3>{dateFormat(item.createdAt)} </h3>
				</Link>
			))}
		</>
	);
}

export default NoteItem;
