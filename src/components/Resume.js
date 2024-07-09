import React from 'react';
import './Resume.css'; // Import CSS file for component styling
import CustomizedTimeline from './CustomizedTimeline';

const Resume = () => {
  return (
    <section className="resume">
      <div className="left-section">
        
          < CustomizedTimeline />
        
      </div>
      <div className="right-section">
        <h1>Cristina Ramirez</h1>
        
        <h2>Summary</h2>
        <p>
          Dedicated front-end developer with over 6 years of experience in building and maintaining responsive web applications. Proficient in modern web technologies and frameworks, with a strong focus on creating seamless user experiences and efficient code.
        </p>

        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor in Communications</h3>
          <p>Universidad Anáhuac | Graduated May 2019</p>
        </div>

        <h2>Skills</h2>
        <ul className="skills-list">
          <li>UX/UI Design</li>
          <li>SEO & SEM Best Practices</li>
          <li>Responsive Web Design</li>
          <li>User Research & Testing</li>
          <li>Adobe Creative Suite</li>
          <li>Figma</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
