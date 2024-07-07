import React from "react";

function Emoji({emoji,onEmojiClick}){
    return (
        <div className="emoji" onClick={()=>onEmojiClick(emoji)}>
            {emoji}
        </div>
    )
}
export default Emoji;