import React, { useState } from "react";

function NoteInput({ noteText, setNoteText }) {
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

export default NoteInput;
