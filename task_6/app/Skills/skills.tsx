import React from 'react';

export const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-700 py-16">
      {/* Section Heading */}
      <h1 className="text-3xl text-white font-semibold mb-10 text-center tracking-wide">Skills</h1>
      
      {/* Languages Section */}
      <div className="max-w-5xl mx-auto mb-12 px-6">
        <h2 className="text-2xl text-white font-medium mb-6">Languages</h2>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-white text-lg">HTML</p>
            <div className="w-3/4 bg-gray-500 h-2 rounded-full">
              <div className="bg-blue-950 h-2 rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white text-lg">CSS</p>
            <div className="w-3/4 bg-gray-500 h-2 rounded-full">
              <div className="bg-blue-950 h-2 rounded-full w-[70%]"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white text-lg">TypeScript</p>
            <div className="w-3/4 bg-gray-500 h-2 rounded-full">
              <div className="bg-blue-950 h-2 rounded-full w-[65%]"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Frameworks & Tools Section */}
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl text-white font-medium mb-6">Frameworks & Tools</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors duration-300 cursor-pointer text-sm font-medium">
            Next.js
          </div>
          <div className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors duration-300 cursor-pointer text-sm font-medium">
            Tailwind CSS
          </div>
          <div className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors duration-300 cursor-pointer text-sm font-medium">
            React
          </div>
          <div className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors duration-300 cursor-pointer text-sm font-medium">
            Figma
          </div>
          <div className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors duration-300 cursor-pointer text-sm font-medium">
            Git
          </div>
          <div className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors duration-300 cursor-pointer text-sm font-medium">
            VS Code
          </div>
          <div className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors duration-300 cursor-pointer text-sm font-medium">
            Vercel
          </div>
        </div>
      </div>
    </div>
  );
};
