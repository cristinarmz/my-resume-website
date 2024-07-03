// src/App.js

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Work from './components/Work';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('section1');

  const renderSection = () => {
    switch (activeSection) {
      case 'section1':
        return <Section1 />;
      case 'work':
        return <Work />;
      case 'resume':
        return <Resume />;
      default:
        return <Section1 />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />
      <div className="content">
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
