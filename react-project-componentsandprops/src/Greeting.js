import React from "react";

Greeting.defaultProps = {
    name : "Guest",
    city : "Delhi"
};

function Greeting(props){
    return <h1>Good evening {props.name} {props.city}</h1>
}

export default Greeting;