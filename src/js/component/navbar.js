import React from "react";
import "../../styles/NavBar.css";
import "/workspace/StarWarBlog/src/img/StarWarsFont.ttf"
export const Navbar = () => {
	return (

		<div className="NavBarBody">

			<div className="NavBar">
				<h1 className="Tittle"><strong>Star Wars</strong></h1>
				<button className="navButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navBarIcon"><i className="fab fa-jedi-order" id="Icon"></i></span>
				</button>
				
			</div>
		</div>
			);
};
