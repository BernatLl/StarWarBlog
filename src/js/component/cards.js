import React, { Component, useState } from "react";

export const Cards = (props) => {
    const [data, setData] = useState({});

    return (
       setData(props.peopleData.name,props.peopleData.height, props.peopleData.eye_color, props.peopleData.hair_color)
        
    );
	
    };
