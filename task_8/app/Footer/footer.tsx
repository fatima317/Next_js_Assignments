'use client';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer id="contact" className="flex flex-col items-center px-8 sm:px-16 lg:px-40 bg-gradient-to-b from-teal-700 to-teal-800 py-6">
      <div className="flex flex-row items-center gap-6 mb-4">
        <a
          href="https://www.linkedin.com/in/dr-fatima-s-6820b2238"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate-300 hover:text-white text-2xl transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/fatima317"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-300 hover:text-white text-2xl transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>
      <Button
        className="rounded-lg bg-teal-800 text-white font-semibold text-sm hover:bg-teal-700 transition-colors duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to Top
      </Button>
    </footer>
  );
};
