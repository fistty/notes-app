import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NoteContextProvider } from "./contexts/noteContext/NoteContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<NoteContextProvider>
		<App />
	</NoteContextProvider>
);
