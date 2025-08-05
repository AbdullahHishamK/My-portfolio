import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const handler = (e) => setDarkMode(e.matches);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const mainStyle = {
    minHeight: '100vh',
    backgroundColor: darkMode ? '#1c1d25' : '#fff',
    transition: 'background-color 0.3s',
  };

  // Main page component with all sections
  const MainPage = () => (
    <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      <Home darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Contact />
      <Footer darkMode={darkMode} />
    </div>
  );

  return (
    <Router>
      <div style={mainStyle}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route 
            path="/skills" 
            element={
              <div className="pt-16"> {/* Add padding-top for skills page too */}
                <Skills darkMode={darkMode} />
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App