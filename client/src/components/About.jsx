import React from "react";
import useReveal from "./useReveal";

const About = () => {
  const headRef = useReveal();
  const textRef = useReveal();
  const statsRef = useReveal();

  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-head reveal" ref={headRef}>
          <span className="tag">O(1) — about</span>
          <h2>Constant curiosity, growing skill set.</h2>
        </div>

        <div className="about-grid">
          <div className="reveal" ref={textRef}>
            <p>
              I'm a <strong>B.Tech student specializing in Artificial
              Intelligence &amp; Machine Learning</strong> at Veltech
              University, with a habit of turning coursework into shipped
              projects instead of leaving it on paper.
            </p>
            <p>
              Most of my work sits in the <strong>MERN stack</strong> — React
              on the front end, Node/Express and MongoDB underneath — built
              on a foundation of <strong>Java, SQL, and data structures &amp;
              algorithms</strong> that I care about as much as the UI on top.
            </p>
            <p>
              I'm drawn to problems where <em>correctness and craft</em> both
              matter: an app that works, and one that's pleasant to use.
            </p>

            <ul className="checklist">
              <li>
                <span className="idx">01</span>
                Ships full-stack projects end to end, not just prototypes
              </li>
              <li>
                <span className="idx">02</span>
                Strong grounding in DSA — not just framework syntax
              </li>
              <li>
                <span className="idx">03</span>
                Learning AI/ML through real datasets, not just theory
              </li>
            </ul>
          </div>

          <div className="stat-grid reveal" ref={statsRef}>
            <div className="stat-card">
              <div className="num">10+</div>
              <div className="lbl">PROJECTS_BUILT</div>
            </div>
            <div className="stat-card">
              <div className="num">5+</div>
              <div className="lbl">TECH_STACKS</div>
            </div>
            <div className="stat-card">
              <div className="num">2+</div>
              <div className="lbl">AI_ML_PROJECTS</div>
            </div>
            <div className="stat-card">
              <div className="num">2026</div>
              <div className="lbl">GRAD_YEAR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;