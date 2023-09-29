import React from "react";

function NoteText({ noteText, setNoteText, setSave, disabled }) {
	const handleChange = (e) => {
		setNoteText(e.target.value);
		if (setSave) {
			setSave(true);
		}
	};
	return (
		<>
			<textarea
				placeholder="Note..."
				value={noteText}
				onChange={handleChange}
				name="noteText"
				disabled={disabled}
			/>
		</>
	);
}

export default NoteText;
