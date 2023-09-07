import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "./App.css";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Trash from "./pages/Trash";
import { NoteContext } from "./contexts/NoteContext";
import { useEffect, useState } from "react";
import NewNote from "./pages/NewNote";

function App() {
	// State for current path and notes
	const [path, setPath] = useState("");
	const [notes, setNotes] = useState([]);
	const [refresh, setRefresh] = useState(true);

	// Create a router with routes
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />}></Route>
				<Route path="favorite" element={<Favorite />}></Route>
				<Route path="trash" element={<Trash />}></Route>
				<Route path="new" element={<NewNote />}></Route>
			</Route>
		)
	);

	// Load notes from localStorage
	useEffect(() => {
		const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
		setNotes(storedNotes);
	}, [refresh]);

	return (
		<>
			<NoteContext.Provider value={{ path, setPath, notes, setRefresh }}>
				<RouterProvider router={router} />
			</NoteContext.Provider>
		</>
	);
}

export default App;
