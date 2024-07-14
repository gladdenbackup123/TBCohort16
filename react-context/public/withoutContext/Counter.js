import React from "react";

function Counter({count,setCount}){
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count is {count}</button>
        </div>
    )
}

export default Counter;