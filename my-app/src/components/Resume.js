// src/components/Resume.js

import React from 'react';
import './Resume.css'; // Import CSS file for component styling

const Resume = () => {
  return (
    <section className="resume">
      <h1>Cristina Ramirez</h1>
      
      <h2>Summary</h2>
      <p>
      Dedicated front-end developer with over 6 years of experience in building and maintaining responsive web applications. Proficient in modern web technologies and frameworks, with a strong focus on creating seamless user experiences and efficient code.
      </p>

      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Product Designer</h3>
        <p>Hakuna | Nov '23 - Present</p>
        <ul>
          <li>Created design concepts for the company's brand, translating brand values and messaging into visually compelling assets for social media and concert ads.</li>
          
        </ul>
      </div>
      <div className="experience-item">
        <h3>UX/UI Designer</h3>
        <p>XYZ Agency | Jun 2017 - Dec 2019</p>
        <ul>
          <li>Designed and implemented user-friendly interfaces for various clients across different industries.</li>
          <li>Improved website performance through strategic SEO enhancements.</li>
          <li>Worked closely with clients to understand their business goals and deliver effective design solutions.</li>
        </ul>
      </div>

      <h2>Education</h2>
      <div className="education-item">
        <h3>Bachelor in Communications</h3>
        <p>University of Technology | Graduated May 2017</p>
      </div>

      <h2>Skills</h2>
      <ul className="skills-list">
        <li>UX/UI Design</li>
        <li>SEO & SEM Best Practices</li>
        <li>Responsive Web Design</li>
        <li>User Research & Testing</li>
        <li>Adobe Creative Suite</li>
        <li>Sketch</li>
        <li>Figma</li>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
      </ul>
    </section>
  );
};

export default Resume;
