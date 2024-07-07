import logo from './logo.svg';
import './App.css';
import EmojiList from './EmojiList';
import { useState } from 'react';

function App() {

  const [selectedEmoji , setSelectedEmoji] = useState('');

  function OnEmojiClick(emoji){
    setSelectedEmoji(emoji);
  }
  return (
    <div className="App">
      <h1>Emoji Picker</h1>

      <EmojiList onEmojiClick={OnEmojiClick}/>

      <h2>Selected Emoji : {selectedEmoji}</h2>
      
    </div>
  );
}

export default App;
