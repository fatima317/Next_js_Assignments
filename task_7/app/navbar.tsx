'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HiMenu } from 'react-icons/hi';
import './styles.css';

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
    <div className="navbar">
  <div className="navbar-container">
    <div className="navbar-brand">My Portfolio</div>
    <HiMenu className="navbar-menu-icon" onClick={toggleMenu} />
    <div className="navbar-links">
      <Button
        onClick={() => scrollToSection('about')} className="navbar-button"
      >
        About Me
      </Button>
      <Button
        onClick={() => scrollToSection('contact')} className="navbar-button"
      >
        Contact
      </Button>
    </div>
  </div>
  {menuOpen && (
    <div className="navbar-dropdown">
      <Button
        onClick={() => scrollToSection('about')} className="navbar-dropdown-button"
      >
        About Me
      </Button>
      <Button
        onClick={() => scrollToSection('contact')} className="navbar-dropdown-button"
      >
        Contact
      </Button>
    </div>
  )}
</div>
  );
};

export default Navbar;
