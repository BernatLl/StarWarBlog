import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Home from "./home";
import "../../styles/dataDetail.css";
import { useParams } from "react-router-dom";

export const DataPlanetsDetail = () => {
	const { store, actions } = useContext(Context);
	const [planetDetail, setPlanetDetail] = useState({});
	const params = useParams().uid;

  useEffect(() => {
	console.log(`aqui estamos weyy ${params}`);
    loadPlanetsDetail(params);
  }, []);

  const loadPlanetsDetail = (uid) => {
    fetch(
		`https://www.swapi.tech/api/planets/`.concat(uid)
	).then(response => {
		console.log("aqui esta response de getPeopleByUid", response)
		if(response.ok){
			return response.json()
		}
		throw new Error ("Fail loading getPeopleByUid")
	}).then(responseAsjson=>{
		console.log("aqui esta getby ide people", responseAsjson.result.properties)
		setPlanetDetail(responseAsjson.result.properties)
		
	}
	).catch(errorGetPeopleById => {
		console.error(errorGetPeopleById.message)
	})
  };
	


	return (
		<div className="container detail">
			
            <div>
                <ul>
                    <li>Name: {planetDetail.name}</li>
                    <li>Climate: {planetDetail.climate}</li>
                    <li>Created: {planetDetail.created}</li>
                    <li>Diameter: {planetDetail.diameter}</li>
                    <li>Edited: {planetDetail.edited}</li>
                    <li>Gravity: {planetDetail.gravity}</li>
                    <li>Orbital Period: {planetDetail.orbital_period}</li>
                    <li>Population {planetDetail.population}</li>
                    <li>Rotation period: {planetDetail.rotation_period}</li>
                    <li>Surface water: {planetDetail.surface_water}</li>
                    <li>Terrain: {planetDetail.terrain}</li>
                    
                </ul>
            </div>
			
		</div>
	);
};

