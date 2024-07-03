// src/components/Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: example@email.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: +1234567890</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 123 Street, City, Country</p>
        </div>
      </div>
      <div className="footer-column">
        <div className="social-icons">
          <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
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
