'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <div className="sticky top-0 bg-gradient-to-r from-teal-400 to-teal-500 z-50 px-6 py-3 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Portfolio</div>
        <HiMenu
          className="text-white w-8 h-8 md:hidden cursor-pointer"
          onClick={toggleMenu}
        />
        <div className="hidden md:flex gap-6">
          <Button
            onClick={() => scrollToSection('about')}
            className="rounded-lg bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors duration-300"
          >
            About Me
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            className="rounded-lg bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors duration-300"
          >
            Contact
          </Button>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col items-start bg-teal-800 p-4 md:hidden transition-transform duration-500 ease-in-out transform">
          <Button
            onClick={() => scrollToSection('about')}
            className="rounded-lg bg-teal-700 text-white font-semibold text-sm hover:bg-teal-600 mb-2 transition-colors duration-300"
          >
            About Me
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            className="rounded-lg bg-teal-700 text-white font-semibold text-sm hover:bg-teal-600 transition-colors duration-300"
          >
            Contact
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
