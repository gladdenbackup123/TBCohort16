import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Biodata from './BioData';
function App() {
  let a = 20;
  let b = 10;
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Gladden's React Tutorial!</h2>
        <img src={logo} className="App-logo" alt="logo" />
        

        {/* <Calculator/> */}
        {/* <TextInput/>
        <Checkbox/> */}

        <Biodata/>
      </header>
    </div>
  );
}

export default App;
