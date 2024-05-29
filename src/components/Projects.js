import React from 'react';

const Projects = () => (
  <section className="py-12 px-4 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Projects</h2>
      <div className="space-y-6">
        <div className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-600">NFT Marketing Website</h3>
          <p className="text-gray-600 mt-2">Developed using HTML5, CSS3, JavaScript, and React.js.</p>
          <a href="https://nft-card-assignment.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Visit the website</a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  </section>
);

export default Projects;
