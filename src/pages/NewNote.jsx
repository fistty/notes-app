import React, { useContext, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdFavoriteBorder, MdOutlineDelete } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { NoteContext } from "../contexts/NoteContext";
import "./NewNote.css";
import { FiStar } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function NewNote() {
	const { setPath } = useContext(NoteContext);
	const navigate = useNavigate();
	const handleBackButton = (e) => {
		e.preventDefault();
		navigate("/");

		console.log("back clicked");
	};

	const handleButton = (e) => {
		e.preventDefault();
	};
	useEffect(() => {
		setPath("New Note");
	}, []);
	return (
		<div className="new-note">
			<form action="">
				<div className="title-input-div">
					<button onClick={handleBackButton} className="back-button">
						<FaChevronLeft color="white" size="1.5rem" />
					</button>
					<input className="title-input" placeholder="Title" />
					<button onClick={handleButton} className="favorite-button">
						<FiStar title="Add to favorite" size="1.5rem" className="favorite-svg" />
					</button>
					<button onClick={handleButton} className="delete-button">
						<MdOutlineDelete
							size="1.6rem"
							color="white"
							className="delete-svg"
							title="Delete Note"
						/>
					</button>
				</div>
				<textarea placeholder="Note..." />
			</form>
		</div>
	);
}

export default NewNote;
