import React from 'react';
import './Navbar.css';
import favicon from '../src/assets/favicon-cris.png'; // Adjusted import path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
        </div>
        <div className="nav-center">
          <a href="/" className="nav-brand">
            <img src={favicon} alt="logo" className="brand-logo" />
          </a>
        </div>
        <div className="nav-right">
          <a href="/portfolio" className="nav-link">Work</a>
          <a href="/contact" className="nav-link">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
