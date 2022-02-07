import React,{useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Home = (props) => {
	const { store, actions } = useContext(Context);
	return(
		<>
			<div className="container">
				<h1 className="title">Characters</h1>
					<div className="card" >
						<img src="..." className="card-img-top" alt="..."></img>
							{peopleData.map((people, i)=>(
								<div className="card-body">
									<h5 className="card-title">{people.name}</h5>
									<p className="card-text">{people.hair_color}</p>
									<p className="card-text">{people.eye_color}</p>
									<p className="card-text">{people.heigth}</p>
					
								</div>
							))}
  						<div className="card-link">
							<a href="#" className="btn btn-primary">Read more</a>
							<a href="#" className="btn btn-primary">favorites</a>
						</div>	  
					</div>
			</div>
	
		</>

	
	);
}
