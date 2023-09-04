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
import { PathContext } from "./contexts/pathContext";
import { useState } from "react";
import NewNote from "./pages/NewNote";

function App() {
	const [path, setPath] = useState("");
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

	return (
		<>
			<PathContext.Provider value={{ path, setPath }}>
				{" "}
				<RouterProvider router={router} />
			</PathContext.Provider>
		</>
	);
}

export default App;
