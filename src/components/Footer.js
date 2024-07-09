// src/components/Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const handleDownload = () => {
    // Replace with your logic for downloading the resume as PDF
    alert('Downloading resume as PDF!');
  };

  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faEnvelope} /> crisr3724@gmail.com </p>
          <p><FontAwesomeIcon icon={faPhone} /> +52 5555045330</p>
          <p>Made by me </p>
        </div>
      </div>
      <div className="footer-column">
        <div className="social-icons">
          <a href="https://github.com/cristinarmz" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://linkedin.com/in/cristinarmz"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <div className="footer-column">
        <div className="resume-download">
          <button onClick={handleDownload}>Download Resume (PDF)</button>
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;