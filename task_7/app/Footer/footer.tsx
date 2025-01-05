'use client';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import '../styles.css';

export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="iconContainer">
        <a
          href="https://www.linkedin.com/in/dr-fatima-s-6820b2238"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="iconLink"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/fatima317"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="iconLink"
        >
          <FaGithub />
        </a>
      </div>
      <p className="footerText">
        Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and custom CSS, deployed with Vercel.
      </p>
      <Button
        className="backToTopButton"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to Top
      </Button>
    </footer>
  );
};
