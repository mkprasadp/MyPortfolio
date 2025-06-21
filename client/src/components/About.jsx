import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>
      <p className="about-intro">
        I'm a passionate and motivated <strong>B.Tech student</strong> specializing in <strong>Artificial Intelligence and Machine Learning</strong>, currently exploring the exciting intersection of data and intelligent systems.
      </p>
      <p className="about-details">
        I have hands-on experience with core programming languages and tools including <strong>React</strong>, <strong>JavaScript</strong>, <br/>
        <strong>HTML/CSS</strong>, <strong>MongoDB</strong>,  <strong>Express.js</strong>,  <strong>DSA</strong>, <strong>Java</strong>, and <strong>SQL</strong>. 
        My academic and personal projects reflect a deep interest in <strong>machine learning</strong>.
      </p>
      <ul className="about-highlights">
        <li>🔹 Currently enhancing my skills in <strong>Data Structures and Algorithms (DSA)</strong></li>
        <li>🔹 Proactive learner through certifications, coding platforms, and tech workshops</li>
        <li>🔹 Strong foundation in AI concepts and practical implementation using real-world datasets</li>
      </ul>
      <p className="about-closing">
        My goal is to build innovative solutions that combine technical precision with impactful user experiences.
      </p>
    </section>
  );
};

export default About;
