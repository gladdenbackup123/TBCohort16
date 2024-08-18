import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        //document.title = `You clicked ${count} times!`;
        localStorage.setItem('favoriteColor', 'red');
        alert("Count Updated"+count);

    }, [count] )

    return (
        <div>
            <h2>You clicked {count} times!</h2>

            <button onClick={()=>setCount(count+1)}>Click Me!</button>
        </div>
    )
}

export default Counter;