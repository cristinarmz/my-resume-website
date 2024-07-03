// src/components/Resume.js

import React from 'react';
import './Resume.css'; // Import CSS file for component styling

const Resume = () => {
  return (
    <section className="resume">
      <h1>John Doe</h1>
      <p>Email: john.doe@example.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Location: New York, NY</p>
      
      <h2>Professional Summary</h2>
      <p>
        Experienced UX/UI Product Designer with a strong background in SEO and SEM best practices. 
        Skilled in creating intuitive, visually appealing interfaces optimized for both users and search engines. 
        Proven track record of designing for conversion and driving traffic.
      </p>

      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Senior UX/UI Designer</h3>
        <p>ABC Company | Jan 2020 - Present</p>
        <ul>
          <li>Led design projects from concept to completion, ensuring a user-centric approach.</li>
          <li>Collaborated with developers and marketing teams to optimize web and mobile interfaces for SEO and SEM.</li>
          <li>Conducted user research and testing to inform design decisions and improve user satisfaction.</li>
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
        <h3>Bachelor of Science in Computer Science</h3>
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
