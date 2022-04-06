import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Home from "./home";
import "../../styles/dataDetail.css";
import { useParams } from "react-router-dom";

export const DataShipsDetail = () => {
	const { store, actions } = useContext(Context);
	const [shipDetail, setShipDetail] = useState({});
	const params = useParams().uid;

  useEffect(() => {
	console.log(`aqui estamos weyy ${params}`);
    loadShipsDetail(params);
  }, []);

  const loadShipsDetail = (uid) => {
    fetch(
		`https://www.swapi.tech/api/starships/`.concat(uid)
	).then(response => {
		console.log("aqui esta response de getPeopleByUid", response)
		if(response.ok){
			return response.json()
		}
		throw new Error ("Fail loading getPeopleByUid")
	}).then(responseAsjson=>{
		console.log("aqui esta getby ide people", responseAsjson.result.properties)
		setShipDetail(responseAsjson.result.properties)
		
	}
	).catch(errorGetPeopleById => {
		console.error(errorGetPeopleById.message)
	})
  };
	


	return (
		<div className="container detail">
			
				<div>
					<ul>
						<li>Name: {shipDetail.name}</li>
						<li>Model: {shipDetail.model}</li>
						<li>Passengers {shipDetail.passengers}</li>
						<li>Cargo capacity: {shipDetail.cargo_capacity}</li>
						<li>Consumables {shipDetail.consumables}</li>
						<li>Cost in credits: {shipDetail.cost_in_credits}</li>
						<li>Created: {shipDetail.created}</li>
						<li>Crew: {shipDetail.crew}</li>
						<li>Edited: {shipDetail.edited}</li>
						<li>Hyperdrive rating: {shipDetail.hyperdrive_rating}</li>
						<li>length: {shipDetail.length}</li>
						<li>Manufacturer: {shipDetail.manufacturer}</li>
						<li>Max Atmosphering speed: {shipDetail.max_atmosphering_speed}</li>
						
						
					</ul>
				</div>
				

				
			
		</div>
	);
};

