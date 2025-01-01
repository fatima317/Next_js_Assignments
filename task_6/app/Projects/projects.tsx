'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      src: "/calculator.png",
      title: "Command-line Calculator",
      subtitle: "A command-line interface calculator that performs basic arithmetic operations.",
      link: "https://www.npmjs.com/package/ra1ra2-simple-calculator?activeTab=versions", 
    },
    {
      src: "/weather-widget.jpeg",
      title: "Weather Widget",
      subtitle: "A real-time weather update widget built with Next.js, providing weather forecasts based on location.",
      link: "https://30-days-challenge-v4x2.vercel.app/", 
    },
    {
      src: "/timer.png",
      title: "Countdown Timer",
      subtitle: "A Next.js timer application that allows users to set and manage multiple countdowns with adjustable settings.",
      link: "https://30-days-challenge-topaz.vercel.app/", 
    },
    {
      src: "/digital-clock.jpg",
      title: "Digital Clock",
      subtitle: "A digital clock application that displays real-time updates, built with Next.js",
      link: "https://30-days-challenge-evq2.vercel.app/", 
    },
    {
      src: "/resume-builder.png", 
      title: "Resume Builder",
      subtitle: "A dynamic resume builder application that allows users to create and customize their resumes.",
      link: "https://hackathonmilestone4-blush.vercel.app/", 
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div id="projects" className="w-full flex flex-col items-center py-36 px-8 bg-gradient-to-b from-gray-700 to-gray-800">
      <h1 className="text-3xl text-white font-semibold tracking-wide text-center py-16">Projects</h1>
      
      <div className="relative flex items-center">
        {/* Left Arrow Button */}
        <button
          onClick={goToPrevious}
          className="absolute -left-12 py-2 px-4 bg-gray-700 text-white rounded-full hover:bg-gray-500 focus:outline-none transition-all duration-300"
        >
          &lt;
        </button>

        {/* Project Slide */}
        <div className="flex justify-center gap-8">
          <div
            key={currentIndex}
            className="flex flex-col items-center bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            style={{ width: "270px", height: "320px" }}
          >
            <Image
              src={projects[currentIndex].src}
              alt={projects[currentIndex].title}
              width={120}
              height={120}
              className="rounded-t-lg mt-2"
            />
            <div className="p-4">
              <h2 className="text-lg text-white font-semibold text-center mb-2">{projects[currentIndex].title}</h2>
              <p className="text-sm text-gray-300 text-center">{projects[currentIndex].subtitle}</p>
            </div>
            {/* Button outside the card */}
            <div className="w-full flex justify-center mt-4">
              <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                <button className="py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-500 transition-all duration-300">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={goToNext}
          className="absolute -right-12 py-2 px-4 bg-gray-700 text-white rounded-full hover:bg-gray-500 focus:outline-none transition-all duration-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Projects;
