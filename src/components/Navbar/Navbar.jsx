import React from 'react'

const Navbar = ({ darkMode, setDarkMode }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 shadow-md bg-white text-[#1c1d25] dark:bg-[#1c1d25] dark:text-[#F3F3F3] transition-colors duration-300">
      {/* Left Logo */}
      <div className="flex items-center text-2xl font-bold">
        AHK
      </div>
      {/* Center Links */}
      <ul className="flex space-x-8 text-lg font-medium">
        <li><button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition cursor-pointer">Main</button></li>
        <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition cursor-pointer">Projects</button></li>
        <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition cursor-pointer">Contact</button></li>
      </ul>
      {/* Right Theme Toggle */}
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          // Sun icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M12 7a5 5 0 100 10 5 5 0 000-10z" /></svg>
        ) : (
          // Moon icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-[#F3F3F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
        )}
      </button>
    </nav>
  )
}

export default Navbar
