import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const NoteError = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<div className="note-error">
			<h1> Error! </h1>
			<p>{error.message}. </p>
			Go back to the<Link to="/"> Homepage</Link>
		</div>
	);
};
