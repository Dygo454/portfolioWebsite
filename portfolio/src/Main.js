import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './Main.css'

import Home from './pages/Home';
import Recruit from './pages/Recruit';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './Navbar';

const Main = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/recruit' element={<div className="Main"><Navbar/><Recruit/></div>}></Route>
      <Route path='/about' element={<div className="Main"><Navbar/><About/></div>}></Route>
      <Route path='/projects' element={<div className="Main"><Navbar/><Projects/></div>}></Route>
      <Route
        path="*"
        element={<Navigate to="/home"/>}
      />
    </Routes>
  );
}

export default Main;