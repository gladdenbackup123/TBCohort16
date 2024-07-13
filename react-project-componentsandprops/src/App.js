import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Hello from './Hello';
import Sleep from './Sleep';
import Demo from './Demo';
import { useState } from 'react';
function App() {

  const [user,setUser] = useState({name:"Gladden",city:"Mumbai",age:"10"});
  const nums = [1,2,3,4,5,6];

  return (
    <div className="App">

      <Greeting name="Sakshi"/>
      <Hello user="Akash"/>

      <Sleep name="Gladden" city="Mumbai"/>

      <Demo name="Gladden"/>

      
      <button onClick={()=>setUser({name:"Gladden",city:"Pune",age:"20"})}> Update </button>
      <p>{user.name} {user.age} {user.city}</p>

      <h2>{nums.map((num)=>(
        <div>{num%2==0 ? num : null}</div>
      ))}</h2>

      <h2>{nums.map((num)=>(
        <div>{num%2==0 && num}</div>
      ))}</h2>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Gladden!
        </a>
      </header>
    </div>
  );
}

export default App;
