import React from "react";

function TitleInput({ title, setTitle, setSave }) {
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
			/>
		</>
	);
}

export default TitleInput;
