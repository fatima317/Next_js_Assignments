'use client';
import Image from "next/image";
import React from "react";
import './styles.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <Image
          src="/profile.avif"
          alt="profile image"
          width={160}
          height={160}
          className="hero-image"
          priority
        />
      </div>
      <h1 className="hero-title">Fatima Saleem</h1>
      <p className="hero-description">
        I’m a passionate beginner coder currently exploring the exciting world
        of web development. With a focus on HTML, CSS, and TypeScript, I’m
        dedicated to building user-friendly applications and honing my skills
        in Next.js and Tailwind CSS. Let’s connect and explore the possibilities
        together!
      </p>
      <button
        onClick={() => {
          const projectsElement = document.getElementById("projects");
          if (projectsElement) {
            projectsElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="hero-button"
      >
        Go to Projects
      </button>
    </div>
  );
};

export default Hero;
