import { useEffect } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Favorite from "./pages/favorite/Favorite";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Trash from "./pages/trash/Trash";
import NewNoteForm from "./pages/NewNoteForm";
import { useNoteContext } from "./contexts/noteContext/useNoteContext";
import { Note } from "./pages/note/Note";
import { noteLoader } from "./pages/note/noteLoader";
import { favoriteLoader } from "./pages/favorite/favoriteLoader";
import "./App.css";

function App() {
	const { notes, setNotes, deletedNotes, setDeletedNotes } = useNoteContext();

	// Create a router with routes
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />}></Route>
				<Route
					path="favorite"
					element={<Favorite />}
					loader={(e) => favoriteLoader(e, notes)}
				></Route>
				<Route path="trash" element={<Trash />}></Route>
				<Route path="new" element={<NewNoteForm />}></Route>
				<Route
					path="note/:id"
					element={<Note />}
					loader={(e) => noteLoader(e, notes)}
				></Route>
			</Route>
		)
	);

	const clear = () => {
		localStorage.removeItem("notes");
		console.log(localStorage);
	};

	const get = () => {
		console.log(localStorage);
	};

	useEffect(() => {
		// Load notes from localStorage
		const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
		setNotes(storedNotes);

		// Load deleted notes from localStorage
		const trashNotes = JSON.parse(localStorage.getItem("trash")) || [];
		setDeletedNotes(trashNotes);
	}, []);

	// Save notes to localStorage whenever 'notes' changes
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

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
