import React from "react";
import useReveal from "./useReveal";

const educationData = [
  {
    degree: "B.Tech in Computer Science (AI & ML)",
    school: "Veltech University",
    duration: "2022 — 2026",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Sri Sarada Junior College",
    duration: "2020 — 2022",
  },
  {
    degree: "SSC (10th Standard)",
    school: "Sree Ram High School",
    duration: "2019 — 2020",
  },
];

const Education = () => {
  const headRef = useReveal();
  const listRef = useReveal();

  return (
    <section id="education" style={{ background: "var(--paper-2)" }}>
      <div className="section-inner">
        <div className="section-head reveal" ref={headRef}>
          <span className="tag">O(log n) — education</span>
          <h2>Built on fundamentals.</h2>
        </div>

        <div className="timeline reveal" ref={listRef}>
          {educationData.map((edu, index) => (
            <div className="tl-item" key={index}>
              <div className="yr">{edu.duration}</div>
              <h4>{edu.degree}</h4>
              <div className="school">{edu.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;