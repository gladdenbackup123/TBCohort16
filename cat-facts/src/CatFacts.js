import React, { useDeferredValue, useEffect, useState } from "react";
import axios from 'axios';

function CatFacts(){
    const[fact,setFact] = useState('');
    const[imageURL,setImageURL] = useState('');
    const[loading,setLoading] = useState(true);

    function fetchFact(){
        axios.get('https://catfact.ninja/fact')
            .then(response =>{
                console.log(response.data.fact);
                setFact(response.data.fact);
            })
            
    }

    function fetchImage(){
        setLoading(true);
        axios.get('https://api.thecatapi.com/v1/images/search')
        .then(response =>{
            console.log(response.data);
            setImageURL(response.data[0].url);
        })
        setLoading(false);
    }
    
    useEffect(()=>{
        fetchImage();
    },[])

    
    return(
        <div>
           <h2>Fetch A Cat Fact</h2>
           <button onClick={fetchFact}>Fetch Fact</button>
           <p>{fact}</p>

           <button onClick={fetchImage}>Fetch Image</button>
           <br/>
           <img src={imageURL}></img>
        </div>
    )
}

export default CatFacts;