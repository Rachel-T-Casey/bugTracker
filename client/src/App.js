import './App.css';



import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import BugTracker from './pages/BugTracker'
import Admin from './pages/Admin'

function App() {
  return (
    // Route to bugTracker page
    <> 
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/bugtracker/" element={<BugTracker/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
