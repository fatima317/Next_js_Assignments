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

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="projects" className="py-16 px-6 bg-gradient-to-b from-teal-700 to-teal-800">
      <h1 className="text-3xl text-white font-semibold mb-10 text-center">Projects</h1>

      <div className="max-w-4xl mx-auto flex items-center justify-center gap-6">
        <button onClick={goToPrevious} className="text-white text-xl bg-teal-500 hover:bg-teal-600 p-3 rounded-full">
          &#60;
        </button>
        <div className="bg-teal-900 p-6 rounded-lg shadow-lg w-full md:w-2/3">
          <Image src={projects[currentIndex].src} alt="Project" width={600} height={400} className="rounded-lg mb-4"/>
          <h3 className="text-xl font-bold text-white">{projects[currentIndex].title}</h3>
          <p className="text-white">{projects[currentIndex].subtitle}</p>
          <a href={projects[currentIndex].link} target="_blank" className="text-teal-400 hover:text-teal-300 transition-colors duration-300 mt-4 inline-block">
            View Project
          </a>
        </div>
        <button onClick={goToNext} className="text-white text-xl bg-teal-500 hover:bg-teal-600 p-3 rounded-full">
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Projects;
