import React from "react";

function NoteText({ noteText, setNoteText }) {
	return (
		<>
			<textarea
				placeholder="Note..."
				value={noteText}
				onChange={(e) => setNoteText(e.target.value)}
			/>
		</>
	);
}

export default NoteText;
