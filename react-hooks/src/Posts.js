import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function Posts(){
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(data => setData(data))    
    }, [] )

    return (
        <div>
            {
                <ul>
                    {data.map(post =>(
                        <li>{post.title}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Posts;