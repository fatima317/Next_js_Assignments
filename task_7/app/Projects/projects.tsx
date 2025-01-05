'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import '../styles.css';

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
    <div id="projects" className="projects-section">
      <h1 className="projects-title">Projects</h1>
      
      <div className="projects-slider">
        {/* Left Arrow Button */}
        <button onClick={goToPrevious} className="arrow-button left-arrow">&lt;</button>

        {/* Project Slide */}
        <div className="projects-container">
          <div key={currentIndex} className="project-card">
            <Image
              src={projects[currentIndex].src}
              alt={projects[currentIndex].title}
              width={120}
              height={120}
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-title">{projects[currentIndex].title}</h2>
              <p className="project-subtitle">{projects[currentIndex].subtitle}</p>
            </div>
            <div className="project-link-container">
              <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                <button className="view-project-button">View Project</button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button onClick={goToNext} className="arrow-button right-arrow">&gt;</button>
      </div>
    </div>
  );
};

export default Projects;
