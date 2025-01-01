import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col py-16 bg-gradient-to-b from-gray-500 to-gray-600 shadow-lg"
      aria-label="About Me Section"
    >
      <h1 className="text-2xl text-white font-semibold tracking-wide text-center py-8">
        About Me
      </h1>
      <p className="text-lg text-white font-medium mb-8 text-center px-4 md:px-16 lg:px-32 leading-relaxed">
        I am on a journey to become a skilled web developer, diving into various programming languages and frameworks. 
        My interest in technology began with a desire to create and design, leading me to learn coding to bring my ideas to life. 
        I am currently focusing on enhancing my skills in frontend development and exploring best practices in user experience. 
        As I progress, I aim to contribute to meaningful projects that make a positive impact.
      </p>
    </section>
  );
};

export default About;
