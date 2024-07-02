// src/App.js

import React from 'react';
import Navbar from './Navbar'; 
import Section1 from './Section1'; 
import './App.css'; 
import Work from './Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Section1 />
        <Work />
        
        <p>Scroll down to see the navbar stick at the top.</p>
      </div>
    </div>
  );
}

export default App;
