import React from "react";

function NoteText({ noteText, setNoteText, setSave }) {
	const handleChange = (e) => {
		setNoteText(e.target.value);
		if (setSave) {
			setSave(true);
		}
	};
	return (
		<>
			<textarea placeholder="Note..." value={noteText} onChange={handleChange} />
		</>
	);
}

export default NoteText;
