// src/Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS file
import '../src/assets/favicon-cris.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/services" className="nav-link">Services</a>
        </div>
        <div className="nav-center">
          <a href="/" className="nav-brand">
            <img src="../" alt="logo" className="brand-logo" />
          </a>
        </div>
        <div className="nav-right">
          <a href="/portfolio" className="nav-link">Portfolio</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
