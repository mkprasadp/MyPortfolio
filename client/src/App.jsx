import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';

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
