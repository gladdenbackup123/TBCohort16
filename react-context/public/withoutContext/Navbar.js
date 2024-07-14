import React from "react";
import Button from "./Button";
function Navbar({count,setCount}){
    return (
        <div>
            <p>Navbar</p>
            <Button count={count} setCount={setCount}/>
        </div>
    )
}

export default Navbar;