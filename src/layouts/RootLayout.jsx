import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import "./RootLayout.css";

function RootLayout() {
	const { path, noteCount } = useNoteContext();

	return (
		<div className="root-layout">
			<div className="root-div">
				<h1 className="root-h1">{path}</h1>
				<h2 className="note-count">{noteCount} notes </h2>
			</div>

			<Nav />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;
