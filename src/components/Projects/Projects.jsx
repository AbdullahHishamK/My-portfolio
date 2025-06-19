import React, { useState } from 'react'

const Projects = ({ darkMode }) => {
  const [iframeErrors, setIframeErrors] = useState({});

  const handleIframeError = (projectName) => {
    setIframeErrors(prev => ({ ...prev, [projectName]: true }));
  };

  return (
    <div id="projects" className="min-h-screen py-16 px-4 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-6xl font-bold text-center mb-4 ${darkMode ? 'text-[#1c1d25]' : 'text-[#1c1d25]'}`}>Latest Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-16 rounded-full"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* E-commerce Project */}
          <div className="space-y-6">
            <h3 className={`text-3xl font-bold text-center ${darkMode ? 'text-[#1c1d25]' : 'text-[#1c1d25]'}`}>E-commerce</h3>
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700">
              {iframeErrors.ecommerce ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-600">
                  <div className="text-center">
                    <p className="mb-4">Unable to load preview</p>
                    <a
                      href="https://fresh-cart-snowy-nine.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Visit Project →
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://fresh-cart-snowy-nine.vercel.app/"
                  title="E-commerce Website"
                  className="w-full h-full border-0"
                  loading="lazy"
                  onError={() => handleIframeError('ecommerce')}
                />
              )}
            </div>
            <p className={`text-base leading-relaxed text-center px-4 ${darkMode ? 'text-[#1c1d25]' : 'text-[#1c1d25]'}`}>
              Designed and managed a user-friendly eCommerce website to enhance customer experience using React framework
            </p>
            <div className="text-center">
              <a
                href="https://fresh-cart-snowy-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
              >
                Visit Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Recipes Project */}
          <div className="space-y-6">
            <h3 className={`text-3xl font-bold text-center ${darkMode ? 'text-[#1c1d25]' : 'text-[#1c1d25]'}`}>Recipes</h3>
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700">
              {iframeErrors.recipes ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-600">
                  <div className="text-center">
                    <p className="mb-4">Unable to load preview</p>
                    <a
                      href="https://recipes-delta-ebon.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Visit Project →
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://recipes-delta-ebon.vercel.app/"
                  title="Recipes Website"
                  className="w-full h-full border-0"
                  loading="lazy"
                  onError={() => handleIframeError('recipes')}
                />
              )}
            </div>
            <p className={`text-base leading-relaxed text-center px-4 ${darkMode ? 'text-[#1c1d25]' : 'text-[#1c1d25]'}`}>
              A dynamic and user-friendly recipe website using React, featuring interactive UI, recipe filtering, and seamless navigation.
            </p>
            <div className="text-center">
              <a
                href="https://recipes-delta-ebon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
              >
                Visit Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Restaurant Project */}
          <div className="space-y-6">
            <h3 className={`text-3xl font-bold text-center ${darkMode ? 'text-[#1c1d25]' : 'text-[#1c1d25]'}`}>Restaurant</h3>
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700">
              {iframeErrors.restaurant ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-600">
                  <div className="text-center">
                    <p className="mb-4">Unable to load preview</p>
                    <a
                      href="https://reastraunt.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Visit Project →
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://reastraunt.vercel.app/"
                  title="Restaurant Website"
                  className="w-full h-full border-0"
                  loading="lazy"
                  onError={() => handleIframeError('restaurant')}
                />
              )}
            </div>
            <p className={`text-base leading-relaxed text-center px-4 ${darkMode ? 'text-[#1c1d25]' : 'text-[#1c1d25]'}`}>
              A dynamic and user-friendly Restaurant website using React, featuring interactive UI, recipe filtering, and seamless navigation.
            </p>
            <div className="text-center">
              <a
                href="https://reastraunt.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
              >
                Visit Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
