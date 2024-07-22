import React, { useState } from "react";

function AxiosMovieData(){
    const [movie,setMovie] = useState('')
    function fetchMovieData(){

    }
    
    return (
        <div>
            <h1>Movie Data</h1>
            <input
            type="text"
            value={movie}
            onChange={(e)=>setMovie(e.target.value)}
            placeholder="Enter Movie Name"/>
            <br/>
            <button onClick={fetchMovieData}>Fetch Movie Data</button>
        </div>
    )
}

export default AxiosMovieData;