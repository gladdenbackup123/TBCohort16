import React, { useState } from "react";

function Filter({setFilter}){
    
    return(
        <div className="filter-container">
            <label className="filter-label">Filter by Category: </label>
            <select className="filter-select" onChange={(e)=>setFilter(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='food'>Food</option>
                    <option value='transport'>Transport</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='utility'>Utility</option>
                    <option value='others'>Others</option>
            </select>
        </div>
    )
}

export default Filter;