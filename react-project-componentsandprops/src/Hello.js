import React from "react";

Hello.defaultProps = {
    user : "Nidhi",
    subject : "React"
}
function Hello(props){
    return <h1>Hello {props.user}! You am learning {props.subject}!</h1>
}

export default Hello;