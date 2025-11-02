import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-[#1f1c2c] to-[#928DAB] bg-opacity-60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wide">Amarnath</div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 text-white font-medium">
          {['home', 'about', 'projects', 'contact'].map((item, index) => (
            <li key={index}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer relative group"
              >
                <span className="group-hover:text-indigo-300 transition-all duration-200">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 text-white font-medium px-4 py-2">
          {['home', 'about', 'projects', 'contact'].map((item, index) => (
            <li key={index}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer block text-lg"
                onClick={() => setIsMenuOpen(false)}  // Close the menu on click
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
