import React from "react";

function Navbar(){
    return (
        <div>
            {/* <h2>My Navbar</h2> */}
            <nav>
                <a href="/"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/contact"><li>Contact</li></a>
                <a href="/user"><li>User</li></a>
                
            </nav>
        </div>
    )
}

export default Navbar;