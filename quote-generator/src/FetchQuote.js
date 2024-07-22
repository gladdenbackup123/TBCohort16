import React, { useEffect, useState } from "react";
import axios from "axios";
function FetchQuote(){
    const[quote,setQuote] = useState('');

    function getQuote(){
        axios.get('https://api.quotable.io/random')
        .then(response =>{
            console.log(response.data);
            setQuote(response.data);
        })
    }

    useEffect(()=>{
        getQuote();
    },[])

    return (
        <div>
            <p>Quote : {quote.content}</p>
            <p>Author : {quote.author}</p>

            <button onClick={getQuote}>New Quote</button>
        </div>
    )
}

export default FetchQuote;