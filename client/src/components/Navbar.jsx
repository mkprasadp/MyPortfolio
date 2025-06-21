import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <h2>MyPortfolio</h2>
      </NavLink>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </div>

      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        <li>
          <a href="https://drive.google.com/file/d/13umtIlkoxJx_snC4mMpJ_V2Jg3siD2_b/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
