import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function Theme(){
    const [darkMode,setDarkMode] = useState(false);

    useEffect(()=>{
        document.body.style.backgroundColor = darkMode ? '#000' : '#fff';
        document.body.style.color = darkMode ? '#fff' : '#000';
    }, [darkMode] )

    return (
        <div>
            <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
            <button onClick={()=>setDarkMode(!darkMode)}>Change Theme</button>
        </div>
    )
}

export default Theme;