import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/dr-fitness-logo.png';
import NavButton from './buttons/NavButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="drop-shadow-md fixed top-0 left-0 w-full z-50 bg-gray-50">
        <header className="flex justify-between items-center h-18 px-4 md:px-8">
          {/* Logo */}
          <div>
            <img src={logo} alt="SR Fitness Logo" className="h-11 w-40 m-2" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12' // Cross icon
                    : 'M4 6h16M4 12h16M4 18h16' // Hamburger icon
                }
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`${isMenuOpen ? 'max-h-[50vh] opacity-100' : 'max-h-0 opacity-0'
              } absolute top-16 left-0 w-full bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out md:relative md:max-h-full md:opacity-100 md:flex md:gap-8 md:items-center md:top-0 md:w-auto`}
          >
            <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
              <li>
                <Link
                  to="/"
                  className="block text-sm font-normal hover:text-[#FF1E00]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about_us"
                  className="block text-sm font-normal hover:text-[#FF1E00]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/coaches"
                  className="block text-sm font-normal hover:text-[#FF1E00]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Coaches
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="block text-sm font-normal hover:text-[#FF1E00]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block text-sm font-normal hover:text-[#FF1E00]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <div>
                  <NavButton />
                </div>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      {/* Add padding to prevent content overlap */}
      <div className="pt-14"></div>
    </>
  );
};

export default Navbar;
