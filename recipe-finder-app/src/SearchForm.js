import React from "react";
import { useState } from "react";

function SearchForm({searchRecipes}){
    const [input,setInput] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        searchRecipes(input);
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search for a recipe!"
                    value = {input}
                    onChange={(e)=>setInput(e.target.value)}>
                </input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;