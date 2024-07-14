import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { useState } from 'react';
function App() {
  const [count,setCount] = useState(0);
  return (
    <>
      <div className="App">
      <Navbar count={count} setCount={setCount}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <button onClick={()=>setCount(count+1)}>
            Count is {count}
          </button>

    
        </header>
      </div>
    </>
  );
}

export default App;
