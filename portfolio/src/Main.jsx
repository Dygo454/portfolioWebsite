import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './Main.css'

import Home from './pages/Home';
import Recruit from './pages/Recruit';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/recruit' element={<div className="Main"><Navbar/><Recruit/><Footer/></div>}></Route>
      <Route path='/about' element={<div className="Main"><Navbar/><About/><Footer/></div>}></Route>
      <Route path='/projects' element={<div className="Main"><Navbar/><Projects/><Footer/></div>}></Route>
      <Route path='/resume' element={<div className="Main"><Navbar/><Resume/><Footer/></div>}></Route>
      <Route
        path="*"
        element={<Navigate to="/home"/>}
      />
    </Routes>
  );
}

export default Main;