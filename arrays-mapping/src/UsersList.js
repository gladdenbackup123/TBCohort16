import React from "react";
import User from "./User";
function UsersList({users}){
    
    return(
        <div>
            {users.map(user=> (
                <User id={user.id} name={user.name} city={user.city}/>
            ))}
        </div>
    )
}
export default UsersList;