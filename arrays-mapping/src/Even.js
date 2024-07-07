import React from "react";

function Even(props){
    const nums = [
        42, 85, 73, 15, 28, 97, 61, 34, 55, 19,
        88, 22, 47, 68, 31, 90, 76, 14, 53, 66
    ];
    return(
        <div>
            {nums.sort().map(num=>(
                num%2==0 ? <li>{num}</li> : null
            ))}
        </div>
    )
}
export default Even;