import React from "react";
import { FaReact,FaNodeJs,FaHtml5,FaCss3Alt,FaJs,FaGitAlt,FaJava,FaDatabase,} from "react-icons/fa";
import {SiMongodb,SiExpress,SiTailwindcss,SiPostman,SiVercel,SiFirebase,} from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const skillCategories = {
  Frontend: [
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  Backend: [
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
    <section id="skills" className="bg-black-500 py-12 px-6 text-center">
      <h2 className="text-[2.2rem] mb-8 text-[#222] inline-block pb-2 border-b-2 border-[#4facfe]">
        Skills
      </h2>

      <div className="max-w-[1000px] mx-auto">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-10">
            
            <h3 className="text-xl text-[#007acc] mb-4">
              {category}
            </h3>

            <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(130px,1fr))]">
              {skills.map((skill, index) => (
                <div key={index}
                  className="bg-white p-4 rounded-xl flex flex-col items-center
                    shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]">
                  <span className="text-3xl mb-2 text-[#4facfe]">
                    {skill.icon}
                  </span>
                  <p className="text-base text-[#333] font-medium">
                    {skill.name}
                  </p>
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
