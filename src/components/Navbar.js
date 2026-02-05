import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-section">
        <img src="/images/logo.png" alt="AM Logo" className="logo-img" />
        <h1>AAP KA MEHER</h1>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Donate</a>
        <a href="#">About</a>
        <a href="#">Sign In</a>
      </nav>
    </header>
  );
}

export default Navbar;
