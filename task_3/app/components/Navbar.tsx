import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className="flex  bg-blue-900 text-white text-justify">
        <Link className='mr-16 hover:text-blue-400 text-2xl' href= '/'>Home</Link>
        <Link className='mr-16 hover:text-blue-400 text-2xl' href= '/About'>About</Link>
        <Link className='mr-16 hover:text-blue-400 text-2xl' href= '/Contact'>Contact</Link>
        <Link className='mr-16 hover:text-blue-400 text-2xl' href= '/Footer'>Footer</Link>
        </nav>
    </div>
  )
}

export default Navbar