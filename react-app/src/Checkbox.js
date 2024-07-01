import { useState } from "react";
import React from "react";

function Checkbox(){

    const [checked,setChecked] = useState(false)

    return (
        <div>
            <label>Checbox - </label>
            <input type="checkbox" onChange={() => setChecked(!checked)}/>

            <p>{checked ? "Checked" : "Not Checked"}</p>
        </div>
    );
}

export default Checkbox;