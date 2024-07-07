import React from "react";

function Numbers(props){
    let numbers = props.data;
    return(
        <div>
            <ul>
                {numbers.map((num,index)=>(
                <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    )
}
export default Numbers;