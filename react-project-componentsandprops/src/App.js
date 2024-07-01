import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Hello from './Hello';
import Sleep from './Sleep';

function App() {


  return (
    <div className="App">

      <Greeting name="Sakshi"/>
      <Hello user="Akash"/>

      <Sleep name="Gladden" city="Mumbai"/>

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
