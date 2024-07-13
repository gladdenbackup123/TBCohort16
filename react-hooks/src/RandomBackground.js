import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function RandomBackground(){
    const [color,setColor] = useState("#ffffff");

    useEffect(()=>{
        document.body.style.backgroundColor = color;
    }, [color] )

    function getRandomColor(){
        const letters = '0123456789ABCDEF';
        let randomColor = "#";
        for(let i=1 ; i<=6 ; i++){
            randomColor += letters[Math.floor(Math.random()*15)];
        }
        console.log(randomColor);
        return randomColor;
    }

    return (
        <div>
            <h2>Random Background Color</h2>
            <button onClick={()=>setColor(getRandomColor())}>Click to Change Color</button>
        </div>
    )
}

export default RandomBackground;