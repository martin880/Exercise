import React from 'react';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Playbar from './components/Playbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/playbar" element={<Playbar />}></Route>
      </Routes>
    </>
  );
}

export default App;
