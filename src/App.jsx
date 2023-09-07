import { useEffect, useState } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Trash from "./pages/Trash";
import NoteForm from "./pages/NoteForm";
import { NoteContext } from "./contexts/NoteContext";
import "./App.css";

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
				<Route path="new" element={<NoteForm />}></Route>
			</Route>
		)
	);

	const clear = () => {
		localStorage.removeItem("notes");
	};

	const get = () => {
		console.log(notes);
	};

	// Load notes from localStorage
	useEffect(() => {
		const storedNotes = JSON.parse(localStorage.getItem("notes"));
		if (storedNotes) {
			setNotes(storedNotes);
		}
	}, []);

	// Save notes to localStorage whenever 'notes' or 'refresh' changes
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes, refresh]);

	return (
		<>
			<button className="clear" onClick={clear}>
				CLEAR
			</button>
			<button className="get" onClick={get}>
				GET
			</button>
			<NoteContext.Provider
				value={{ notes, setNotes, refresh, setRefresh, path, setPath }}
			>
				<RouterProvider router={router} />
			</NoteContext.Provider>
		</>
	);
}

export default App;
