import React from "react";
import { useState } from "react";

function Recipe({recipe}){
    return (
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title}/>
        </div>
    )
}

export default Recipe;