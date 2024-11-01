// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './index.css';
import Work from './components/work/Work';
import Skills from './components/skills/skills';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <About />
        <Work />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
