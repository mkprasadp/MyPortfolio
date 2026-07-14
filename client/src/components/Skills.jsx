import React from "react";
import useReveal from "./useReveal";

const Skills = () => {
  const headRef = useReveal();
  const codeRef = useReveal();

  return (
    <section id="skills" style={{ background: "var(--paper-2)" }}>
      <div className="section-inner">
        <div className="section-head reveal" ref={headRef}>
          <span className="tag">O(n) — skills</span>
          <h2>The stack, as a manifest.</h2>
          <p>
            What I reach for by default, grouped the way a real project would
            declare its dependencies.
          </p>
        </div>

        <div className="skills-wrap reveal" ref={codeRef}>
          <div className="skills-file">
            <div className="terminal-bar">
              <span className="tdot t1"></span>
              <span className="tdot t2"></span>
              <span className="tdot t3"></span>
              <span className="tname">skills.json</span>
            </div>
            <div className="code-block">
              <div className="code-line">{"{"}</div>
              <div className="code-line">
                {"  "}<span className="k">"frontend"</span>: [
                <span className="s">"React.js"</span>,{" "}
                <span className="s">"JavaScript"</span>,{" "}
                <span className="s">"HTML5"</span>,{" "}
                <span className="s">"CSS3"</span>,{" "}
                <span className="s">"Tailwind CSS"</span>],{" "}
                <span className="c">// what the user sees</span>
              </div>
              <div className="code-line">
                {"  "}<span className="k">"backend"</span>: [
                <span className="s">"Node.js"</span>,{" "}
                <span className="s">"Express.js"</span>,{" "}
                <span className="s">"MongoDB"</span>],{" "}
                <span className="c">// what makes it real</span>
              </div>
              <div className="code-line">
                {"  "}<span className="k">"fundamentals"</span>: [
                <span className="s">"Java"</span>,{" "}
                <span className="s">"Data Structures & Algorithms"</span>,{" "}
                <span className="s">"SQL"</span>],{" "}
                <span className="c">// what makes it correct</span>
              </div>
              <div className="code-line">
                {"  "}<span className="k">"tooling"</span>: [
                <span className="s">"Git"</span>,{" "}
                <span className="s">"GitHub"</span>,{" "}
                <span className="s">"Postman"</span>,{" "}
                <span className="s">"Vercel"</span>,{" "}
                <span className="s">"Firebase"</span>]{" "}
                <span className="c">// what ships it</span>
              </div>
              <div className="code-line">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;