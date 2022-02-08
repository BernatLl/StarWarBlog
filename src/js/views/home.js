import React,{useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect (()=>{
			actions.loadPeopleData();
				actions.loadPlanetData();
				actions.loadStarshipsData();
		}, []);

	return(
		

		<>
			<h1 className="title" >
				Characters
			</h1>
			<div className="container" >		
				{store.peopleData.map((people, i)=>
					
		
						<div className="card"   key={i}>
							<img src="https://starwars-visualguide.com/assets/img/categories/films.jpg" className="card-img-top" alt="..."></img>
							<div className="card-body" >
									<h5 className="card-title">{people.name}</h5>
																
									<div className="card-link">
											<a href="#" className="btn btn-primary">Read more</a>
											<a href="#" className="btn btn-primary">favorites</a>
									</div>
							</div>
						</div>
						
							
				)}
			</div>		
			<h1 className="title" >
				Planets
			</h1>
			<div className="container" >		
				{store.planetsData.map((people, i)=>
					
		
						<div className="card"   key={i}>
							<img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="card-img-top" alt="..."></img>
							<div className="card-body" >
									
									<h5 className="card-title">{people.name}</h5>
									
									<div className="card-link">
											<a href="#" className="btn btn-primary">Read more</a>
											<a href="#" className="btn btn-primary">favorites</a>
									</div>
							</div>
						</div>
						
							
				)}
			</div>		
			<h1 className="title" >
				Starships
			</h1>
			<div className="container" >		
				{store.starshipsData.map((people, i)=>
					
		
						<div className="card"   key={i}>
							<img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" className="card-img-top" alt="..."></img>
							<div className="card-body" >
									
									<h5 className="card-title">{people.name}</h5>
								
									<div className="card-link">
											<a href="#" className="btn btn-primary">Read more</a>
											<a href="#" className="btn btn-primary">favorites</a>
									</div>
							</div>
						</div>
						
							
				)}
			</div>		
	
		</>

	
	);
}

export default Home;