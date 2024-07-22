import React, { useState } from "react";

function FetchGithubUser(){
    const[username,setUsername] = useState('');
    const[userData , setUserData] = useState([]);
    function getData(){
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.log(error));

    }
    return (
        <div>
            <label>Username : </label>
            <input 
                value={username}
                placeholder="Enter Github Username :"
                onChange={(e)=>setUsername(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={getData}>Fetch Repos</button>

            <div>
                <ul>
                    {userData.map(repo => 
                        <div>
                        <li key={repo.id}>{repo.name} - {repo.description}</li>
                        
                        </div>
                    )}
                </ul>
                
            </div>
        </div>
    )
}

export default FetchGithubUser;