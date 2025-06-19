import React from 'react'
import asset10 from '../../assets/asset 10.svg'
import asset11 from '../../assets/asset 11.svg'
import asset12 from '../../assets/asset 12.svg'

const About = ({ darkMode }) => {
  return (
    <div id="about" className={`relative min-h-screen flex flex-col items-center justify-center transition-colors duration-300 overflow-hidden ${darkMode ? 'bg-[#1c1d25] text-[#F3F3F3]' : 'bg-white text-[#1c1d25]'}`}>
      {/* Decorative SVGs - Multiple scattered copies */}
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
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-8 text-center">About Me</h1>
        <div className="text-lg leading-relaxed text-center space-y-6">
          <p>
            I'm a passionate Frontend Developer with a strong foundation in modern web technologies. 
            I specialize in creating responsive, user-friendly applications using React and other cutting-edge frameworks.
          </p>
          <p>
            With a keen eye for design and a focus on performance, I build applications that not only look great 
            but also provide seamless user experiences across all devices.
          </p>
          <p>
            I'm constantly learning and staying up-to-date with the latest trends in web development to deliver 
            the best possible solutions for my clients and users.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
