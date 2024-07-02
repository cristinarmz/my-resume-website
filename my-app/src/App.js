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
      </div>
    </div>
  );
}

export default App;
