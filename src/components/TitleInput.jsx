import React from "react";

function TitleInput({ title, setTitle, setSave }) {
	const handleChange = (e) => {
		setTitle(e.target.value);
		if (setSave) {
			setSave(true);
		}
	};

	const handleBlur = () => {
		if (title === "") {
			setTitle("No title");
		}
	};
	return (
		<>
			<input
				className="title-input"
				placeholder="Title"
				value={title}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
		</>
	);
}

export default TitleInput;
