import React from 'react'
import { useNavigate } from 'react-router-dom'
import asset10 from '../../assets/asset 10.svg'
import asset11 from '../../assets/asset 11.svg'
import asset12 from '../../assets/asset 12.svg'

// Import skill icons - replace these with your actual image paths
import htmlIcon from '../../assets/HTML5_logo_and_wordmark.webp'
import cssIcon from '../../assets/a9dcc740cad3149598307b5de8bc10c3.webp'
import bootstrapIcon from '../../assets/62a76492bd73a4af5c5d4fb9.webp'
import tailwindIcon from '../../assets/tailwind-css-logo-png_seeklogo-354675.webp'
import javascriptIcon from '../../assets/javascript-logo-javascript-icon-transparent-free-png.webp'
import typescriptIcon from '../../assets/typescript-logo_brandlogos.net_hg0qh.webp'
import sassIcon from '../../assets/sass-logo-png_seeklogo-273879.webp'
import muiIcon from '../../assets/mui-material-ui9415.logowik.com.webp'
import reactIcon from '../../assets/React-Logo-500x281.webp'

const Skills = ({ darkMode }) => {
  const navigate = useNavigate();

  // Skills data with proficiency percentages and icons
  const skills = [
    { name: 'HTML', proficiency: 95, icon: htmlIcon },
    { name: 'CSS', proficiency: 90, icon: cssIcon },
    { name: 'Bootstrap', proficiency: 85, icon: bootstrapIcon },
    { name: 'Tailwind', proficiency: 92, icon: tailwindIcon },
    { name: 'JavaScript', proficiency: 88, icon: javascriptIcon },
    { name: 'TypeScript', proficiency: 75, icon: typescriptIcon },
    { name: 'Sass', proficiency: 80, icon: sassIcon },
    { name: 'MUI', proficiency: 82, icon: muiIcon },
    { name: 'React.js', proficiency: 90, icon: reactIcon }
  ];

  return (
    <div className={`relative min-h-screen py-16 px-4 transition-colors duration-300 overflow-hidden ${darkMode ? 'bg-[#1c1d25] text-[#F3F3F3]' : 'bg-white text-[#1c1d25]'}`}>
      {/* Decorative SVGs - Same as Home page */}
      {/* Asset 11 (diamond) - scattered */}
      <img src={asset11} alt="diamond" className="absolute w-8 opacity-10 pointer-events-none select-none top-4 left-4 rotate-12" style={{zIndex: 0}} />
      <img src={asset11} alt="diamond" className="absolute w-6 opacity-10 pointer-events-none select-none top-16 left-1/3 -rotate-45" style={{zIndex: 0}} />
      <img src={asset11} alt="diamond" className="absolute w-10 opacity-10 pointer-events-none select-none top-1/4 right-8 rotate-90" style={{zIndex: 0}} />
      <img src={asset11} alt="diamond" className="absolute w-7 opacity-10 pointer-events-none select-none top-1/2 left-1/4 rotate-30" style={{zIndex: 0}} />
      <img src={asset11} alt="diamond" className="absolute w-5 opacity-10 pointer-events-none select-none bottom-1/3 left-1/6 -rotate-15" style={{zIndex: 0}} />
      <img src={asset11} alt="diamond" className="absolute w-9 opacity-10 pointer-events-none select-none bottom-1/4 right-1/4 rotate-60" style={{zIndex: 0}} />
      <img src={asset11} alt="diamond" className="absolute w-6 opacity-10 pointer-events-none select-none bottom-8 right-8 -rotate-30" style={{zIndex: 0}} />
      <img src={asset11} alt="diamond" className="absolute w-8 opacity-10 pointer-events-none select-none top-3/4 left-1/2 rotate-45" style={{zIndex: 0}} />
      
      {/* Asset 12 (semicircle) - scattered */}
      <img src={asset12} alt="semicircle" className="absolute w-12 opacity-10 pointer-events-none select-none top-8 right-1/6 -rotate-20" style={{zIndex: 0}} />
      <img src={asset12} alt="semicircle" className="absolute w-8 opacity-10 pointer-events-none select-none top-1/3 left-1/5 rotate-75" style={{zIndex: 0}} />
      <img src={asset12} alt="semicircle" className="absolute w-10 opacity-10 pointer-events-none select-none top-2/3 right-1/3 -rotate-45" style={{zIndex: 0}} />
      <img src={asset12} alt="semicircle" className="absolute w-6 opacity-10 pointer-events-none select-none bottom-1/3 right-1/6 rotate-15" style={{zIndex: 0}} />
      <img src={asset12} alt="semicircle" className="absolute w-9 opacity-10 pointer-events-none select-none bottom-1/2 left-1/3 -rotate-60" style={{zIndex: 0}} />
      <img src={asset12} alt="semicircle" className="absolute w-7 opacity-10 pointer-events-none select-none top-1/6 right-1/2 rotate-30" style={{zIndex: 0}} />
      <img src={asset12} alt="semicircle" className="absolute w-11 opacity-10 pointer-events-none select-none bottom-12 left-1/4 -rotate-90" style={{zIndex: 0}} />
      <img src={asset12} alt="semicircle" className="absolute w-8 opacity-10 pointer-events-none select-none top-5/6 right-1/5 rotate-50" style={{zIndex: 0}} />
      
      {/* Scattered small triangles (asset 10) */}
      <img src={asset10} alt="triangle" className="absolute w-6 opacity-10 pointer-events-none select-none top-10 left-1/4 rotate-12" style={{zIndex: 0}} />
      <img src={asset10} alt="triangle" className="absolute w-5 opacity-10 pointer-events-none select-none top-1/2 left-10 rotate-45" style={{zIndex: 0}} />
      <img src={asset10} alt="triangle" className="absolute w-4 opacity-10 pointer-events-none select-none top-1/3 right-20 -rotate-12" style={{zIndex: 0}} />
      <img src={asset10} alt="triangle" className="absolute w-7 opacity-10 pointer-events-none select-none bottom-16 right-1/3 rotate-6" style={{zIndex: 0}} />
      <img src={asset10} alt="triangle" className="absolute w-5 opacity-10 pointer-events-none select-none bottom-24 left-1/2 -rotate-45" style={{zIndex: 0}} />
      <img src={asset10} alt="triangle" className="absolute w-4 opacity-10 pointer-events-none select-none top-24 right-1/4 rotate-90" style={{zIndex: 0}} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-4">My Skills</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl opacity-80">Technologies and tools I work with</p>
        </div>

        {/* Skills Grid - 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`group relative flex flex-col items-center p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50' 
                  : 'bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-lg border border-gray-200/50'
              }`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                minHeight: '350px'
              }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Skill Icon in Circle */}
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
                  <div className={`w-full h-full rounded-full flex items-center justify-center p-4 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                {/* Floating ring animation */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse group-hover:border-blue-400/60 transition-colors duration-300"></div>
              </div>
              
              {/* Skill Name */}
              <h3 className="text-2xl font-bold mb-6 text-center group-hover:text-blue-500 transition-colors duration-300">
                {skill.name}
              </h3>
              
              {/* Progress Section */}
              <div className="flex flex-col items-center space-y-4 w-full">
                {/* Progress Circle */}
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke={darkMode ? '#374151' : '#e5e7eb'}
                      strokeWidth="6"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 42}`}
                      strokeDashoffset={`${2 * Math.PI * 42 * (1 - skill.proficiency / 100)}`}
                      className="transition-all duration-1000 ease-out"
                      style={{ filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.5))' }}
                    />
                    {/* Gradient definition */}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Percentage text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {skill.proficiency}%
                    </span>
                    <span className="text-sm opacity-60 font-medium">Proficiency</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full max-w-40">
                  <div className={`h-2 rounded-full overflow-hidden ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.proficiency}%`,
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-20">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Skills;