import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth } from "./firebase-config";
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css'

import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {

  const [user] = useAuthState(auth);


  return (
    <Router>
      <nav className='navbar'>
        <Link to="/" className='logo'>EasyCliq</Link>
        {user ? <Link to="/dashboard">Dashboard</Link> : <Link to="/">Home</Link>}
      </nav>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
  )
}

export default App
