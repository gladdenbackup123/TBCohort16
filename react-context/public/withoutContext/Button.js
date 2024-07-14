import React from "react";
import Counter from "./Counter";
function Button({count,setCount}){
    return (
        <div>
            <p>Button</p>
            <Counter count={count} setCount={setCount}/>
        </div>
    )
}

export default Button;