import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/dataDetail.css";

export const DataDetail = () => {
	const { store, actions } = useContext(Context);
	useEffect (()=>{
			actions.loadPeopleData();
			actions.loadPlanetData();
			actions.loadStarshipsData();
	}, []);

	return (
		<div className="container">
			{store.peopleData.map((index, i)=>{
				<div key={i}>
					<ul>
						<li>Name: {index.name}</li>
						<li>Heigth: {index.heigth}</li>
						<li>Hair Color: {index.hair_color}</li>
						<li>Eye Color: {index.eye_color}</li>
						<li>Birth Year{index.birth_year}</li>
						<li>Gender: {index.gender}</li>
						<li>Created: {index.created}</li>
						<li>Home World: {index.homeworld}</li>
						<li>Url: {index.url}</li>
						<li>Description: {index.description}</li>
					</ul>
				</div>
			})}
		</div>
	);
};

