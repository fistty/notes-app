import React, { useContext, useEffect } from "react";
import { PiNotePencilDuotone } from "react-icons/pi";
import { PathContext } from "../contexts/pathContext";

function Home() {
	const { path, setPath } = useContext(PathContext);
	useEffect(() => {
		setPath("All Notes");
	}, []);
	return (
		<div className="home">
			<h1>No notes yet</h1>
			<button>
				<PiNotePencilDuotone color="red" />
			</button>
		</div>
	);
}

export default Home;
