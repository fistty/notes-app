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
import { NotFound } from "./pages/notFound/NotFound";
import { NoteError } from "./pages/note/NoteError";

function App() {
	const { notes, setNotes, trashNotes, setTrashNotes, isBackdrop, isModal } =
		useNoteContext();

	// Create a router with routes
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />}></Route>
				<Route
					path="note/:id"
					element={<Note />}
					loader={(e) => noteLoader(e, notes)}
					errorElement={<NoteError />}
				></Route>
				<Route
					path="favorite"
					element={<Favorite />}
					loader={() => favoriteLoader(notes)}
					errorElement={<NoteError />}
				></Route>
				<Route
					path="trash"
					element={<Trash />}
					loader={() => trashLoader(trashNotes)}
					errorElement={<NoteError />}
				></Route>
				<Route path="new" element={<NewNoteForm />}></Route>
				<Route
					path="trash/:id"
					element={<TrashNote />}
					loader={(e) => trashNoteLoader(e, trashNotes)}
					errorElement={<NoteError />}
				></Route>

				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	useEffect(() => {
		const loadNotes = () => {
			// Load notes from localStorage
			localStorage.clear();
			const storedNotes = JSON.parse(localStorage.getItem("notes")) || [
				{
					id: 1,
					title: "This is the note title",
					note: "This is the note",
					favorite: true,
					createdAt: new Date(),
				},
			];
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
			{(isModal || isBackdrop) && <Backdrop />}

			<RouterProvider router={router} />
		</>
	);
}

export default App;
