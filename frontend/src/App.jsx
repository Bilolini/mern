import { useState } from 'react'
import './App.css'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login';
import Register from '../pages/Register';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from './../components/Header';

function App() {
    return (
        <Router>
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </div>
            <Outlet />
        </Router>
    )
}

export default App
