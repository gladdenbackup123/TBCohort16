import React from "react";

function User(props){
    
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.city}</p>
        </div>
    )
}
export default User;