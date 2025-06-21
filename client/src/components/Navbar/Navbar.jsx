import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to='/'>
        <h2>MyPortfolio</h2>
      </NavLink>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://drive.google.com/file/d/13umtIlkoxJx_snC4mMpJ_V2Jg3siD2_b/view?usp=sharing" download>Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
