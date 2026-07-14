import React from "react";
import { FaGithub } from "react-icons/fa";
import useReveal from "./useReveal";

const projects = [
  {
    path: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This site — a React-based portfolio built to present my work, skills, and background clearly to recruiters and collaborators.",
    link: "https://github.com/mkprasadp/MyPortfolio/",
  },
  {
    path: "ecommerce-app",
    title: "E-commerce App",
    description:
      "A MERN-stack storefront with user authentication, product listings, and a working payment flow — end to end, not just the UI.",
    link: "https://github.com/mkprasadp/",
  },
  {
    path: "spotify-clone",
    title: "Spotify Music Clone",
    description:
      "A music-streaming interface inspired by Spotify, built with React and external music APIs to practice UI state and media playback.",
    link: "https://github.com/mkprasadp/",
  },
  {
    path: "greencart",
    title: "GreenCart",
    description:
      "An eco-friendly grocery ordering app built on the MERN stack, designed around encouraging more sustainable everyday purchases.",
    link: "https://github.com/mkprasadp/",
  },
];

const ProjectCard = ({ proj }) => {
  const ref = useReveal();
  return (
    <div className="project-card reveal" ref={ref}>
      <div className="project-path">
        ~/projects/<b>{proj.path}</b>
      </div>
      <h4>{proj.title}</h4>
      <p>{proj.description}</p>
      <a
        className="project-link"
        href={proj.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        View source
      </a>
    </div>
  );
};

const Projects = () => {
  const headRef = useReveal();

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-head reveal" ref={headRef}>
          <span className="tag">O(n log n) — projects</span>
          <h2>Sorted by how much I learned.</h2>
          <p>A few things I've built while turning ideas into working software.</p>
        </div>

        <div className="project-grid">
          {projects.map((proj, idx) => (
            <ProjectCard proj={proj} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;