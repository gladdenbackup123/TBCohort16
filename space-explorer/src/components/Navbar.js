import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";


const Navbar = () => {
  return (
    <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/planets">Planets</Link></li>
    </nav>
  )
}

export default Navbar
