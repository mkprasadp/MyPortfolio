import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills/>
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
