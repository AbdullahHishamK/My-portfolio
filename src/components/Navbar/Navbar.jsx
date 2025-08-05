import React, { useState } from 'react'
<<<<<<< HEAD
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
=======

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
>>>>>>> f38fc1e912dbb525db963f8b41487423a115b219

  const scrollToSection = (sectionId) => {
    // If we're not on the main page, navigate to it first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
<<<<<<< HEAD
=======
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
>>>>>>> f38fc1e912dbb525db963f8b41487423a115b219
  };

  const navigateToSkills = () => {
    navigate('/skills');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 

  return (
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-4 sm:px-6 py-3 shadow-md bg-white text-[#1c1d25] dark:bg-[#1c1d25] dark:text-[#F3F3F3] transition-colors duration-300 z-50">
      {/* Left Logo */}
      <div className="flex items-center text-xl sm:text-2xl font-bold">
        <button onClick={() => navigate('/')} className="hover:text-blue-400 transition">
          AHK
        </button>
=======
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 py-3 shadow-md bg-white text-[#1c1d25] dark:bg-[#1c1d25] dark:text-[#F3F3F3] transition-colors duration-300 relative z-50">
      {/* Left Logo */}
      <div className="flex items-center text-xl sm:text-2xl font-bold">
        AHK
>>>>>>> f38fc1e912dbb525db963f8b41487423a115b219
      </div>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li><button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition">Main</button></li>
        <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition">Projects</button></li>
<<<<<<< HEAD
        <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">About Me</button></li>
        <li><button onClick={navigateToSkills} className="hover:text-blue-400 transition">Skills</button></li>
        <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button></li>

=======
        <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button></li>
>>>>>>> f38fc1e912dbb525db963f8b41487423a115b219
      </ul>

      {/* Right Section - Theme Toggle & Mobile Menu Button */}
      <div className="flex items-center space-x-2">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            // Sun icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M12 7a5 5 0 100 10 5 5 0 000-10z" /></svg>
          ) : (
            // Moon icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800 dark:text-[#F3F3F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            // Close icon (X)
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`absolute top-full left-0 right-0 bg-white dark:bg-[#1c1d25] shadow-lg transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}`}>
        <ul className="py-4 space-y-2">
          <li>
            <button 
              onClick={() => scrollToSection('home')} 
              className="w-full text-left px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              Main
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="w-full text-left px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              Projects
            </button>
          </li>
<<<<<<< HEAD
                    <li>
            <button 
              onClick={() => scrollToSection('about')} 
              className="w-full text-left px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              About Me
            </button>
          </li>
          <li>
            <button 
              onClick={navigateToSkills} 
              className="w-full text-left px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              Skills
            </button>
          </li>
=======
>>>>>>> f38fc1e912dbb525db963f8b41487423a115b219
          <li>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="w-full text-left px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar