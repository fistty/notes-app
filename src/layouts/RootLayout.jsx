import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import "./RootLayout.css";

function RootLayout() {
	const { path, noteCount } = useNoteContext();
	const formatNoteCount = () => {
		if (noteCount > 1) {
			return `${noteCount} notes`;
		} else if (noteCount >= 0 && noteCount !== null) {
			return `${noteCount} note`;
		} else if (noteCount === null) {
			return null;
		}
	};
	return (
		<div className="root-layout">
			<div className="root-div">
				<h1 className="root-h1">{path}</h1>
				<h2 className="note-count">{formatNoteCount()}</h2>
			</div>

			<Nav />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;
