import react , { useState } from "react";



function TextInput(){
    const [text , setText] = useState('')
    return (
        <div>
            <label>Type to Display : </label>
            <input type='text' value={text} 
            onChange={(e) => setText(e.target.value)}
            >
            </input>
            <h2>{text}</h2>
        </div>
    );
}

export default TextInput;