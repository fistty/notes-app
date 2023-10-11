import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { useNoteContext } from "../contexts/noteContext/useNoteContext";
import "./RootLayout.css";

function RootLayout() {
	const { path } = useNoteContext();

	return (
		<div className="root-layout">
			<h1 className="root-h1">{path}</h1>
			<Nav />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;
