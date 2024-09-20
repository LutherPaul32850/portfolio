import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills/>
      <Experience/>
      <Certifications/>
      <Contact />
    </div>
  );
}

export default App;
