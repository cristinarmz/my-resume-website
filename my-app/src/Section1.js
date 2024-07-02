// src/Section1.js

import React from 'react';
import './Section1.css'; // Import Section1 CSS
import CrisImage from '../src/assets/drawing-cris.svg';

const Section1 = () => {
  return (
    <div className="section1">
      <div className="columns">
        <div className="column">
          <h3>Hi there! 👋🏼</h3>
          <p className="intro">I’m Cristina,
          <span style={{ fontWeight: 'bold' }}>Front-end Developer, UI/UX & Multimedia Designer,</span> 
          focused on creating great products for <span className="strikethrough-word">users</span> people. </p>
        </div>
        <div className="column">
          <img src={CrisImage} alt="cris"/>
        </div>
      </div>
    </div>
  );
};

export default Section1;
