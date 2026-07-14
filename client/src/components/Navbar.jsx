import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo">
          manikanta<span style={{ color: "var(--signal)" }}>.dev</span>
          <span className="blink"></span>
        </a>

        <ul className="nav-links">
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#education">education</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>

        <a
          href="https://drive.google.com/file/d/1XcookuLSIXgUPs91ggZqUrp5uRU4Tol7/view"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          resume ↓
        </a>
      </div>
    </nav>
  );
};

export default Navbar;