import React, { useContext } from "react";
import { ThemeContext } from "./context";
function Grandchild(){
    const theme = useContext(ThemeContext);
    return (
        <div style={{background: theme==='dark' ? '#333':'#fff' , color: theme==='dark' ? '#fff':'#333'}}>
            <p>The current Theme from GrandChild is {theme}</p>
        </div>
    )
}

export default Grandchild;