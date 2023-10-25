import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className="not-found">
			<h1> Page does not exist </h1>
			<p>
				Return to <Link to="/">Homepage</Link>
			</p>
		</div>
	);
};
