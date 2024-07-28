import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Planet from './components/Planet';
import Planets from './components/Planets';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<Planet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
