import React from "react";
import { useContext } from "react";
import { counterContext } from "./context";

function Counter(){
    const value = useContext(counterContext);
    return (
        <div>
            <button>Count is {value}</button>
        </div>
    )
}

export default Counter;