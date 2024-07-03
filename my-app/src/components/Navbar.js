// src/components/Navbar.js

import React from 'react';
import { FaHome } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ setActiveSection }) => {
  const handleNavigation = (section) => {
    setActiveSection(section);
    // You can add additional navigation logic here if needed
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <FaHome className="brand-logo" />
          <a href="#home" className="nav-link" onClick={() => handleNavigation('section1')}>
            Home
          </a>
          <a href="#work" className="nav-link" onClick={() => handleNavigation('work')}>
            Work
          </a>
          <a href="#resume" className="nav-link" onClick={() => handleNavigation('resume')}>
            Resume
          </a>
        </div>
        <div className="nav-right">
          {/* Additional elements can be added here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
