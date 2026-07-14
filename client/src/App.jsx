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
      <main>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        built by <span>Manikanta Prasad Padala</span> — © 2026
      </footer>
    </div>
  );
}

export default App;