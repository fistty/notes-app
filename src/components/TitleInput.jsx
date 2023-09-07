import React from "react";

function TitleInput({ title, setTitle }) {
	return (
		<>
			<input
				className="title-input"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</>
	);
}

export default TitleInput;
