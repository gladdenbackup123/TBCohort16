import React, { useEffect } from "react";
import { useState } from "react";
function Timer(){
    const [count,setCount] = useState(100);

    useEffect(()=>{
        if(count>0){
            setTimeout(()=>setCount(count-1),1000);
        }
        
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default Timer;