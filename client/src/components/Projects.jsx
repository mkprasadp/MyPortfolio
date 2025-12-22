import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React to showcase my skills, projects, and experience.",
      link: "https://github.com/mkprasadp/MyPortfolio/",
    },
    {
      title: "E-commerce App",
      description:
        "A MERN stack e-commerce platform with authentication, product listing, and payments.",
      link: "https://github.com/mkprasadp/",
    },
    {
      title: "Spotify Music Clone",
      description:
        "A music streaming web app inspired by Spotify, built using React and APIs.",
      link: "https://github.com/mkprasadp/",
    },
    {
      title: "GreenCart",
      description:
        "Eco-friendly grocery application promoting sustainability using MERN stack.",
      link: "https://github.com/mkprasadp/",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 animate-gradient"></div>

      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30 animate-floatSlow"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-sky-300 rounded-full blur-3xl opacity-30 animate-floatSlow delay-200"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Projects
          </h2>
          <p className="mt-3 text-gray-600">
            Some of the projects I’ve built while learning and exploring
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur rounded-xl p-6 
              shadow-md hover:shadow-xl hover:-translate-y-2 transition-all">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                {proj.title}
              </h4>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {proj.description}
              </p>

              <a href={proj.link} target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800">
                <FaGithub />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
