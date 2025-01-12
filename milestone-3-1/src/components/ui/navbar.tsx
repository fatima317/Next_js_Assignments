import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className='bg-slate-100 w-full mx-auto flex justify-between items-center py-8 px-8 md:px-28'>
      <h1 className='text-purple-950 font-bold text-3xl p-4'>
        <Link href="/">
         NextNote
        </Link>
      </h1>

      <nav className='flex gap-8 md:gap-16 justify-between text-lg md:text-xl font-semibold text-purple-950'>
        <Link href="/" className="hover:text-purple-600 transition-colors duration-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-purple-600 transition-colors duration-200">
          About
        </Link>
        <Link href="/blog" className="hover:text-purple-600 transition-colors duration-200">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-purple-600 transition-colors duration-200">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
