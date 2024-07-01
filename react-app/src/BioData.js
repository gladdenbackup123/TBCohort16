import React from "react";
import { useState } from "react";

function Biodata(){

    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [city , setCity] = useState('');
    return (
        <div>
            <input placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
            <br/>
            <input placeholder="Age" onChange={(e)=> setAge(e.target.value)} />
            <br/>
            <input placeholder="City" onChange={(e)=> setCity(e.target.value)} />

            <h2>Hi {name} , Your age is {age} years old. You are from {city}</h2>
        </div>
    );
}

export default Biodata;