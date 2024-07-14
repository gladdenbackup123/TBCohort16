import React from "react";
import Grandchild from "./Grandchild";
import { ThemeContext } from "./context";
import { useContext } from "react";
function Child(){
    const theme = useContext(ThemeContext);
    return (
        <div style={{background: theme==='dark' ? '#333':'#fff' , color: theme==='dark' ? '#fff':'#333'}}>
            <p>The current Theme from Child is {theme}</p>
            <Grandchild/>
        </div>
    )
}

export default Child;