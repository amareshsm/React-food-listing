import React from 'react';
const Recipe =({title,calories,image,totalWeight})=>{


    return (<div className="recipe-content">
        <div className="img-div">
        <img src={image} alt=""/></div>
        <h6>{title}</h6>
        <p>calories: {calories}</p>
        <p>Total Weight: {totalWeight}</p>
    
    </div>)
}

export default Recipe;