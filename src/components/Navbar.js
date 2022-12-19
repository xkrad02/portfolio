import React from "react";
import "../styles.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <a href="#top">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#techstack">Techstack</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
