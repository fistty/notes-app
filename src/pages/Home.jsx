import React from "react";
import { PiNotePencilDuotone } from "react-icons/pi";

function Home() {
	return (
		<div className="home">
			{/* <h1>ALL Notes</h1>
			<p>50 notes</p> */}
			<h1>Empty</h1>
			<p>No notes yet</p>
			<button>
				<PiNotePencilDuotone color="red" />
			</button>
		</div>
	);
}

export default Home;
