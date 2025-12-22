import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">

          <NavLink to="/" className="text-2xl font-bold tracking-wide text-indigo-600">
            P. <span className="text-gray-800">Manikanta</span>
          </NavLink>

          <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <li>
              <a href="#about" className="hover:text-indigo-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-600 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-600 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-indigo-600 transition">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
