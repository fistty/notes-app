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
				placeholder="Note title"
				value={title}
				onChange={handleChange}
				name="title"
				disabled={disabled}
			/>
		</>
	);
}

export default TitleInput;
