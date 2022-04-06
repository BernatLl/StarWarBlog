import React from "react";
import "../../styles/NavBar.css";
import "/workspace/StarWarBlog/src/img/StarWarsFont.ttf"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export const Navbar = () => {
	return (

		<div className="NavBarBody">

			<div className="NavBar">
				<h1 className="Tittle"><strong>Star Wars</strong></h1>
				<Link to="/">
					<Button id="backHome">
					Back to Home
					</Button>
				</Link>
			</div>
		</div>
			);
};
