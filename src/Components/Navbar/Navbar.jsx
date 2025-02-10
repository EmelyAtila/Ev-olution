import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
        <li className="n-menu">Home</li>
        <li className="n-menu" >Explore</li>
        <li className="n-menu" >About</li>
        <button className="button">
        <li className="nav-contact">Contact</li>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
