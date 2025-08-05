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
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] group">
              {iframeErrors.ecommerce ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Fresh Cart</h4>
                    <p className="text-gray-600 mb-6">E-commerce platform with modern UI</p>
                    <a
                      href="https://fresh-cart-snowy-nine.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://fresh-cart-snowy-nine.vercel.app/"
                  title="E-commerce Website"
                  className="w-full h-full border-0 rounded-2xl"
                  loading="lazy"
                  onError={() => handleIframeError('ecommerce')}
                />
              )}
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
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
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] group">
              {iframeErrors.recipes ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Recipe Hub</h4>
                    <p className="text-gray-600 mb-6">Recipe discovery & management platform</p>
                    <a
                      href="https://recipes-delta-ebon.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://recipes-delta-ebon.vercel.app/"
                  title="Recipes Website"
                  className="w-full h-full border-0 rounded-2xl"
                  loading="lazy"
                  onError={() => handleIframeError('recipes')}
                />
              )}
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
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
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-50 to-red-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] group">
              {iframeErrors.restaurant ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-100">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
<<<<<<< HEAD
                    <h4 className="text-xl font-bold text-gray-800 mb-3">GAME-ON</h4>
                    <p className="text-gray-600 mb-6">Interactive Gaming website</p>
=======
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Restaurant Manager</h4>
                    <p className="text-gray-600 mb-6">Restaurant management & ordering system</p>
>>>>>>> f38fc1e912dbb525db963f8b41487423a115b219
                    <a
                      href="https://game-on-puce.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://game-on-puce.vercel.app/"
                  title="Restaurant Website"
                  className="w-full h-full border-0 rounded-2xl"
                  loading="lazy"
                  onError={() => handleIframeError('restaurant')}
                />
              )}
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
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
