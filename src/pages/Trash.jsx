import React, { useContext, useEffect } from "react";
import { PathContext } from "../contexts/pathContext";

function Trash() {
	const { setPath } = useContext(PathContext);
	useEffect(() => {
		setPath("Trash");
	}, []);
	return (
		<>
			<h1>No deleted note</h1>
		</>
	);
}

export default Trash;
