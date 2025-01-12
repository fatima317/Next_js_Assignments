import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-gradient-to-b from-purple-950 to-slate-950 text-white text-center text-sm md:text-base">
      <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
}
