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
import NewNoteForm from "./pages/NewNoteForm";
import "./App.css";
import { useNoteContext } from "./contexts/noteContext/useNoteContext";
import { Note } from "./pages/note/Note";
import { noteLoader } from "./pages/note/noteLoader";

function App() {
	const { notes, setNotes, refresh } = useNoteContext();

	// Create a router with routes
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />}></Route>
				<Route path="favorite" element={<Favorite />}></Route>
				<Route path="trash" element={<Trash />}></Route>
				<Route path="new" element={<NewNoteForm />}></Route>
				<Route path="note/:id" element={<Note />} loader={noteLoader}></Route>
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
			<RouterProvider router={router} />
		</>
	);
}

export default App;
