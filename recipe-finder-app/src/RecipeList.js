import React from "react";
import { useState } from "react";
import Recipe from "./Recipe";

function RecipeList({recipes}){
    return (
        <div>
            {recipes.length>0 ? 
            ( recipes.map((recipe)=> <Recipe recipe={recipe}/>)) 
            : 
            (<p>No Recipes Found</p>)}
        </div>
    )
}

export default RecipeList;