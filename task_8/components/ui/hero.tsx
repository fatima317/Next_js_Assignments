'use client';
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-teal-500 to-teal-600 py-16 px-6">
      <div className="p-4">
        <Image
          src="/profile.avif"
          alt="profile image"
          width={160}
          height={160}
          className="rounded-full shadow-lg"
          priority
        />
      </div>
      <h1 className="text-5xl text-white font-bold mb-4 tracking-wide">Fatima Saleem</h1>
      <p className="text-lg text-white font-medium text-center max-w-2xl mb-8">
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
        className="bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-500 transition-colors duration-300"
      >
        Go to Projects
      </button>
    </div>
  );
};

export default Hero;
