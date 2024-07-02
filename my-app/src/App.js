// src/App.js

import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './App.css'; // Import App CSS if needed

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <p>Scroll down to see the navbar stick at the top.</p>
      </div>
    </div>
  );
}

export default App;
