import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <div className="font-sans text-gray-900">
    <Header />
    <About />
    <Projects />
    <Contact />
  </div>
);

export default App;

