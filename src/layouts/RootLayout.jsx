import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import "./RootLayout.css";

function RootLayout() {
	return (
		<div className="root-layout">
			<Nav />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;
