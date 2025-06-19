import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

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

  return (
    <div style={mainStyle}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Contact />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
