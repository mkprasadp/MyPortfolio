import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with React and CSS',
      link: 'https://github.com/mkprasadp/',
    },
    {
      title: 'E-commerce App',
      description: 'A full-featured MERN stack e-commerce platform with payment gateway integration.',
      link: 'https://github.com/mkprasadp/',
    },
    {
      title: 'Spotify Music Clone',
      description: 'Music streaming web app inspired by Spotify. Built with React and third-party APIs.',
      link: 'https://github.com/mkprasadp/',
    },
    {
      title: 'GreenCart',
      description: 'Eco-friendly grocery app promoting sustainability. Developed using MERN stack.',
      link: 'https://github.com/mkprasadp/',
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
