import React, { useContext, useEffect } from "react";
import { PathContext } from "../helpers/pathContext";
import usePath from "../helpers/usePath";

function Favorite() {
	const { setPath } = useContext(PathContext);
	useEffect(() => {
		setPath("Favorites");
	}, []);
	return (
		<>
			<h1>No favorites yet</h1>
		</>
	);
}

export default Favorite;
