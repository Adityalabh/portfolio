import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <div className='bg-gray-100 min-h-screen w-full pt-6 '>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Element name="about"><About /></Element>
        <Element name="skills"><Skills /></Element>
        {/* <Element name="experience"><Experience /></Element> */}
        <Element name="projects"><Projects /></Element>
        <Element name="Education"><Education /></Element>
        <Element name="contact"><Contact /></Element>
      </div>
      <Footer />
    </div>
  );
}

export default App;
