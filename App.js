
import React from 'react';
import Navbar from './Navbar';
import './Navbar.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div style={{ height: '2000px', backgroundColor: '#f8f9fa' }}>
        <p>Scroll down to see the navbar stick at the top.</p>
      </div>
    </div>
  );
};

export default App;
