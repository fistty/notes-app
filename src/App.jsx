import { useEffect } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Favorite from "./pages/favorite/Favorite";
import Home from "./pages/home/Home";
import RootLayout from "./layouts/RootLayout";
import Trash from "./pages/trash/Trash";
import NewNoteForm from "./components/NewNoteForm";
import { useNoteContext } from "./contexts/noteContext/useNoteContext";
import { Note } from "./pages/note/Note";
import { noteLoader } from "./pages/note/noteLoader";
import { favoriteLoader } from "./pages/favorite/favoriteLoader";
import { trashLoader } from "./pages/trash/trashLoader";
import { TrashNote } from "./pages/trash/TrashNote";
import { trashNoteLoader } from "./pages/trash/trashNoteLoader";
import { Backdrop } from "./components/Backdrop";
import "./App.css";

function App() {
	const { notes, setNotes, trashNotes, setTrashNotes, isBackdrop, isModal } =
		useNoteContext();

	// Create a router with routes
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />}></Route>
				<Route
					path="favorite"
					element={<Favorite />}
					loader={() => favoriteLoader(notes)}
				></Route>
				<Route
					path="trash"
					element={<Trash />}
					loader={() => trashLoader(trashNotes)}
				></Route>
				<Route path="new" element={<NewNoteForm />}></Route>
				<Route
					path="note/:id"
					element={<Note />}
					loader={(e) => noteLoader(e, notes)}
				></Route>
				<Route
					path="trash/:id"
					element={<TrashNote />}
					loader={(e) => trashNoteLoader(e, trashNotes)}
				></Route>
			</Route>
		)
	);

	const clear = () => {
		localStorage.clear();
		console.log(localStorage);
	};

	const get = () => {
		console.log(localStorage.getItem("trash"));
	};

	useEffect(() => {
		const loadNotes = () => {
			// Load notes from localStorage
			const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
			setNotes(storedNotes);

			// Load deleted notes from localStorage
			const deletedNotes = JSON.parse(localStorage.getItem("trash")) || [];
			setTrashNotes(deletedNotes);
		};

		loadNotes();
	}, []);

	// Save notes to localStorage whenever 'notes' changes
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
		localStorage.setItem("trash", JSON.stringify(trashNotes));
	}, [notes, trashNotes]);

	return (
		<>
			<button className="clear" onClick={clear}>
				CLEAR
			</button>
			<button className="get" onClick={get}>
				GET
			</button>
			{(isModal || isBackdrop) && <Backdrop />}

			<RouterProvider router={router} />
		</>
	);
}

export default App;
