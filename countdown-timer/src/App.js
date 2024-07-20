import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Countdown Timer</h1>
        <Timer/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
