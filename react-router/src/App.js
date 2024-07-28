import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import User from './components/User';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/about",
      element : <About/>
    },
    {
      path : "/contact",
      element : <Contact/>
    },
    {
      path : "/user/:username",
      element : <User/>
    }
  ])
  return (
    <div className="App">
        <Navbar/>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
