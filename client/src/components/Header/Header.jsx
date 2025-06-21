import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-content">
        <h1>Hello, I'm <span>P.Manikanta Prasad</span></h1>
        <p className="header-subtitle">A Passionate Full-Stack Web Developer</p>
        <p className="header-tagline">
          I build fast, responsive, and scalable web applications using the MERN Stack.
        </p>
        <div className="header-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="https://drive.google.com/file/d/13umtIlkoxJx_snC4mMpJ_V2Jg3siD2_b/view" className="btn outline" download>Download Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
