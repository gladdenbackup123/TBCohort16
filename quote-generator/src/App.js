import logo from './logo.svg';
import './App.css';
import FetchQuote from './FetchQuote';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote of the Day!</h1>
        <FetchQuote/>
      </header>
    </div>
  );
}

export default App;
