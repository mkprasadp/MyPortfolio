import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science (AIML)',
      school: 'Veltech University',
      duration: '2022–2026',
    },
    {
      degree: 'Intermediate (MPC)',
      school: 'Sri Sarada Junior College',
      duration: '2020–2022',
    },
    {
      degree: 'SSC (10th Standard)',
      school: 'Sree Ram High School',
      duration: '2019–2020',
    },
  ];

  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.school}</p>
            <span>{edu.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
