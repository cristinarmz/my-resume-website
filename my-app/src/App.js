// src/App.js

import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Section1 from './Section1'; // Import Section1 component
import './App.css'; // Import App CSS if needed

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Section1 />
        
        <p>Scroll down to see the navbar stick at the top.</p>
      </div>
    </div>
  );
}

export default App;
