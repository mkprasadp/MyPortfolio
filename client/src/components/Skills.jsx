import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava, FaDatabase  } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiPostman, SiVercel, SiFirebase, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { GiBrain } from 'react-icons/gi'; 

const skillCategories = {
  "Frontend": [
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    //{ name: "Redux", icon: <SiRedux /> },
    //{ name: "TypeScript", icon: <SiTypescript /> },
    //{ name: "Next.js", icon: <TbBrandNextjs /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  "Programming Fundamentals": [
    { name: "Java", icon: <FaJava /> },
    { name: "DSA", icon: <GiBrain /> },
    { name: "SQL", icon: <FaDatabase /> },

  ],
  "Tools & Deployment": [
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-wrapper">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
