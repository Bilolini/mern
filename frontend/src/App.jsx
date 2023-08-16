import { useState } from 'react'
import './App.css'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login';
import Register from '../pages/Register';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from './../components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QA from '../pages/QA';
import Error from '../pages/Error';
import Bugs from '../pages/Bugs';

function App() {
    return (
        <>
            <Router>
                <div className='container'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/qa' element={<QA />} />
                        <Route path='/bugs' element={<Bugs />} />
                        <Route path='*' element={<Error />} />
                    </Routes>
                </div>
            </Router>
            <Outlet />
            <ToastContainer />
        </>
    )
}

export default App
