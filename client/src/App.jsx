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
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <Navbar />
      <main>
        <Header />
        <About />
        <Skills/>
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
