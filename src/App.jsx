import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Discussion from './pages/Discussion';
import News from './pages/News';
import Reflection from './pages/Reflection';
import AboutMe from './pages/AboutMe';

import AICursor from './components/AICursor';

export default function App() {
  return (
    <Router>
      <AICursor />
      <nav className="bg-gray-900 text-red-600 px-8 py-4  flex justify-end space-x-8 sticky top-0 z-50 shadow-lg">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'text-[#ab2d2d] font-semibold' : 'text-[#d2d1d1] hover:text-[#ab2d2d]'}`}>
          Home
        </NavLink>
        <NavLink to="/discussion" className={({ isActive }) => `nav-link ${isActive ? 'text-[#ab2d2d] font-semibold' : 'text-[#d2d1d1] hover:text-[#ab2d2d]'}`}>
          Discussion
        </NavLink>
        <NavLink to="/news" className={({ isActive }) => `nav-link ${isActive ? 'text-[#ab2d2d] font-semibold' : 'text-[#d2d1d1] hover:text-[#ab2d2d]'}`}>
          News
        </NavLink>
        <NavLink to="/reflection" className={({ isActive }) => `nav-link ${isActive ? 'text-[#ab2d2d] font-semibold' : 'text-[#d2d1d1] hover:text-[#ab2d2d]'}`}>
          Reflection
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'text-[#ab2d2d] font-semibold' : 'text-[#d2d1d1] hover:text-[#ab2d2d]'}`}>
          About Me
        </NavLink>
      </nav>

      <div className="bg-black min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/news" element={<News />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}
