import React from 'react';
import '../styles.css';

const About = () => {
  return (
    <section
      id="about"
      className="about-container"
      aria-label="About Me Section"
    >
      <h1 className="about-title">About Me</h1>
      <p className="about-description">
        I am on a journey to become a skilled web developer, diving into various programming languages and frameworks. 
        My interest in technology began with a desire to create and design, leading me to learn coding to bring my ideas to life. 
        I am currently focusing on enhancing my skills in frontend development and exploring best practices in user experience. 
        As I progress, I aim to contribute to meaningful projects that make a positive impact.
      </p>
    </section>
  );
};

export default About;
