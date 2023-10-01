import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

function NoteList({ notes, path }) {
	const dateFormat = (date) => {
		const currentDate = new Date();
		const inputDate = new Date(date);
		let option;

		// Check if the year of the current date is not the same as the year of the input date
		if (currentDate.getFullYear() !== inputDate.getFullYear()) {
			// Include the "year" option in the formatting
			option = {
				month: "short",
				day: "numeric",
				weekday: "short",
				year: "numeric",
			};
		} else {
			// Exclude the "year" option in the formatting
			option = {
				month: "short",
				day: "numeric",
				weekday: "short",
			};
		}

		const formattedDate = inputDate.toLocaleDateString("en-US", option);
		return formattedDate;
	};

	const handleNoTitle = (title) => {
		if (/[^ ]/.test(title) === false) {
			return "No Title";
		} else return title;
	};

	return (
		<>
			{notes.map((item) => (
				<Link
					className="note-item"
					key={item.id}
					to={`/${path}/${item.id.toString()}`}
				>
					<p>{item.note}</p>
					<h2>{handleNoTitle(item.title)}</h2>
					<h3>
						{dateFormat(item.createdAt)}{" "}
						{item.favorite === true ? (
							<FiStar
								title="Add to favorite"
								size="1rem"
								className="favorite-svg"
								color="#ffe234"
								fill="#ffe234"
							/>
						) : null}
					</h3>
				</Link>
			))}
		</>
	);
}

export default NoteList;
