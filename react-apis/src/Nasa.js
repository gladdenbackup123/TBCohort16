import React, { useState } from "react";
// iBCPEMSbOMrNgf9bfxfmUocw7jqMgNXeSL50ULOc
// https://api.nasa.gov/planetary/apod?api_key=iBCPEMSbOMrNgf9bfxfmUocw7jqMgNXeSL50ULOc&count=5
function Nasa(){
    
    const[nasaData , setNasaData] = useState([]);
    function getData(){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5`)
        .then(response => response.json())
        .then(data => setNasaData(data))
        .catch(error => console.log());

        console.log(nasaData);
    }
    return (
        <div>
            <h1>Nasa Picture of the day!</h1>
            <button onClick={getData}>Get Picture</button>
            <div>
                {nasaData.map(data => 
                    <img src={data.url}></img>
                )}
            </div>
        </div>
    )
}

export default Nasa;