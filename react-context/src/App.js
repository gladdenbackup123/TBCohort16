import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { useState } from 'react';
import { counterContext } from './context';

function App() {
  const [count,setCount] = useState(0);
  return (
    <>
      <counterContext.Provider value={count}>
        <div className="App">
        <Navbar/>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <button onClick={()=>setCount(count+1)}>
              Count is {count}
            </button>

          </header>
        </div>
      </counterContext.Provider>
    </>
  );
}

export default App;
