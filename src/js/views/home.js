import React,{useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigoImage from "../../img/rigo-baby.jpg";

 export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect (()=>{
			actions.loadTotal();
		}, []);

	return(
		

		<>
			<h1 className="title" >
				Characters
			</h1>
			<div className="container" >		
				{store.peopleData.map((people, i)=>
					
		
						<div className="card"   key={i}>
							<img src={rigoImage} className="card-img-top" alt="..."></img>
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
				Characters
			</h1>
			<div className="container" >		
				{store.planetsData.map((people, i)=>
					
		
						<div className="card"   key={i}>
							<img src={rigoImage} className="card-img-top" alt="..."></img>
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
				Characters
			</h1>
			<div className="container" >		
				{store.starshipsData.map((people, i)=>
					
		
						<div className="card"   key={i}>
							<img src={rigoImage} className="card-img-top" alt="..."></img>
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

