import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Home from "./home";
import "../../styles/dataDetail.css";
import { useParams } from "react-router-dom";

export const DataDetail = () => {
	const { store, actions } = useContext(Context);
	const [peopleDetail, setPeopleDetail] = useState({});
	const params = useParams().uid;

  useEffect(() => {
	console.log(`aqui estamos weyy ${params}`);
    loadPeopleDetail(params);
  }, []);

  const loadPeopleDetail = (uid) => {
    fetch(
		`https://www.swapi.tech/api/people/`.concat(uid)
	).then(response => {
		console.log("aqui esta response de getPeopleByUid", response)
		if(response.ok){
			return response.json()
		}
		throw new Error ("Fail loading getPeopleByUid")
	}).then(responseAsjson=>{
		console.log("aqui esta getby ide people", responseAsjson.result.properties)
		setPeopleDetail(responseAsjson.result.properties)
		console.log("name", peopleDetail.name)
	}
	).catch(errorGetPeopleById => {
		console.error(errorGetPeopleById.message)
	})
  };
	


	return (
		<div className="container detail">
			
				<div>
					<ul>
						<li>Name: {peopleDetail.name}</li>
						<li>Heigth: {peopleDetail.height}cm</li>
						<li>Hair Color: {peopleDetail.hair_color}</li>
						<li>Eye Color: {peopleDetail.eye_color}</li>
						<li>Birth Year{peopleDetail.birth_year}</li>
						<li>Gender: {peopleDetail.gender}</li>
						<li>Created: {peopleDetail.created}</li>
						
						
					</ul>
				</div>
				

				
			
		</div>
	);
};

