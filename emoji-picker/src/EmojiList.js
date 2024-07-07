import React from "react";
import Emoji from "./Emoji";
function EmojiList({onEmojiClick}){
    const emojis = [
        '😀', '😂', '😍', '🥺', '🤔', '😎', '😢', '😡', '👍', '👏',
        '🎉', '💔', '❤️', '🔥', '🌟', '🌈', '🍕', '🎂', '🚀', '🌍'
    ];

    return (
        <div className="emoji-list">
            {emojis.map((emoji,index)=>(
                <Emoji key={index} emoji={emoji} onEmojiClick={onEmojiClick}/>
            ))}
        </div>
    )
}
export default EmojiList;