import React from "react";

function TitleInput({ title, setTitle, setSave, disabled }) {
	const handleChange = (e) => {
		setTitle(e.target.value);
		if (setSave) {
			setSave(true);
		}
	};

	return (
		<>
			<input
				className="title-input"
				placeholder="Title"
				value={title}
				onChange={handleChange}
				name="title"
				disabled={disabled}
			/>
		</>
	);
}

export default TitleInput;
