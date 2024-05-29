import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="py-12 px-4 bg-gray-100"
  >
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        Innovative Front-End Developer with 3+ years of experience specializing in building responsive and engaging user interfaces using React.js and modern web technologies...
      </p>
    </div>
  </motion.section>
);

export default About;
