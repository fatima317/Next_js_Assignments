import Link from 'next/link'
import React from 'react'
import '../style.css'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
        <Link className="navbar-link" href= '/'>Home</Link>
        <Link className="navbar-link" href= '/About'>About</Link>
        <Link className="navbar-link" href= '/Contact'>Contact</Link>
        <Link className="navbar-link" href= '/Footer'>Footer</Link>
        </nav>
    </div>
  )
}

export default Navbar