import React, { useEffect, useState } from "react";

const LINES = [
  {
    prompt: "$ whoami",
    out: "> Manikanta Prasad Padala — Full-Stack Developer & AI/ML student",
  },
  {
    prompt: "$ cat focus.txt",
    out: "> Building scalable web apps with the MERN stack, backed by strong DSA fundamentals.",
  },
  {
    prompt: "$ status --check",
    out: "> Open to internships & entry-level roles",
  },
];

const Header = () => {
  // Array of { prompt, out, promptDone, outDone } tracking typed progress
  const [typed, setTyped] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("prompt"); // 'prompt' | 'pause' | 'out' | 'done'

  useEffect(() => {
    if (lineIndex >= LINES.length) return;
    const current = LINES[lineIndex];

    if (phase === "prompt") {
      if (charIndex <= current.prompt.length) {
        const t = setTimeout(() => {
          setTyped((prev) => {
            const next = [...prev];
            next[lineIndex] = { prompt: current.prompt.slice(0, charIndex), out: "" };
            return next;
          });
          setCharIndex((c) => c + 1);
        }, 28);
        return () => clearTimeout(t);
      } else {
        setPhase("pause");
      }
    } else if (phase === "pause") {
      const t = setTimeout(() => {
        setPhase("out");
        setCharIndex(0);
      }, 250);
      return () => clearTimeout(t);
    } else if (phase === "out") {
      if (charIndex <= current.out.length) {
        const t = setTimeout(() => {
          setTyped((prev) => {
            const next = [...prev];
            next[lineIndex] = { prompt: current.prompt, out: current.out.slice(0, charIndex) };
            return next;
          });
          setCharIndex((c) => c + 1);
        }, 14);
        return () => clearTimeout(t);
      } else {
        setPhase("nextline");
      }
    } else if (phase === "nextline") {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
      setPhase("prompt");
    }
  }, [phase, charIndex, lineIndex]);

  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <div>
          <div className="eyebrow-chip">
            <span className="dot"></span> Open to internships &amp; grad roles
          </div>

          <h1>
            Manikanta builds
            <br />
            things that <span>ship</span>.
          </h1>

          <p className="lede">
            Full-stack developer and AI/ML undergrad who likes turning messy
            problems into clean, working software — from React interfaces
            down to the algorithms underneath.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-solid">View projects →</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </div>

        <div>
          <div className="terminal">
            <div className="terminal-bar">
              <span className="tdot t1"></span>
              <span className="tdot t2"></span>
              <span className="tdot t3"></span>
              <span className="tname">manikanta — zsh</span>
            </div>
            <div className="terminal-body">
              {typed.map((line, i) => (
                <div key={i}>
                  <span className="prompt">{line.prompt}</span>
                  {line.out && <span className="out">{line.out}</span>}
                </div>
              ))}
              {lineIndex >= LINES.length && <span className="cursor-blink"></span>}
            </div>
          </div>
        </div>
      </div>

      <svg className="node-graph" viewBox="0 0 260 260" fill="none">
        <g stroke="#3ECF8E" strokeWidth="1" opacity="0.5">
          <line x1="30" y1="40" x2="120" y2="90" />
          <line x1="120" y1="90" x2="210" y2="50" />
          <line x1="120" y1="90" x2="90" y2="190" />
          <line x1="120" y1="90" x2="200" y2="170" />
          <line x1="90" y1="190" x2="200" y2="170" />
          <line x1="30" y1="40" x2="90" y2="190" />
        </g>
        <g fill="#3ECF8E">
          <circle cx="30" cy="40" r="5" />
          <circle cx="120" cy="90" r="7" />
          <circle cx="210" cy="50" r="5" />
          <circle cx="90" cy="190" r="5" />
          <circle cx="200" cy="170" r="6" />
        </g>
      </svg>
    </header>
  );
};

export default Header;