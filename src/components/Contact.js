import React from 'react';

const Contact = () => (
  <section className="py-12 px-4 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact</h2>
      <p className="text-gray-700">Email: <a href="mailto:shrisrivastava2@gmail.com" className="text-blue-500 hover:underline">shrisrivastava2@gmail.com</a></p>
      <p className="text-gray-700 mt-2">Phone: +91 7903696009</p>
      <p className="text-gray-700 mt-2">Location: Patna, India</p>
      <p className="text-gray-700 mt-2">LinkedIn: <a href="https://www.linkedin.com/in/shri-srivastava-ab04a5175/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Shri Srivastava</a></p>
    </div>
  </section>
);

export default Contact;
