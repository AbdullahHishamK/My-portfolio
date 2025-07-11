import React from 'react'

const Footer = ({ darkMode }) => {
  return (
    <div className={`relative min-h-[40vh] flex flex-col items-center justify-center transition-colors duration-300 overflow-hidden ${darkMode ? 'bg-[#1c1d25] text-[#F3F3F3]' : 'bg-white text-[#1c1d25]'}`}>
      {/* Decorative elements similar to home section but fewer */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-6 h-6 border-2 border-current rounded-full"></div>
        <div className="absolute top-16 right-12 w-4 h-4 border-2 border-current transform rotate-45"></div>
        <div className="absolute bottom-16 left-12 w-5 h-5 border-2 border-current rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-3 h-3 border-2 border-current transform rotate-45"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
        
        {/* Social Links */}
        <div className="flex space-x-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abdullah-hisham-28821a28a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          
          {/* GitHub */}
          <a
            href="https://github.com/AbdullahHishamK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-full shadow-lg hover:from-gray-800 hover:to-gray-900 transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 Abdullah Hisham. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
