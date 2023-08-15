import React from 'react'
import Home from '../Pages/Home';
import Login from '../Pages/SignIn';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import SignUp from '../Pages/Signup';
import Dashboard from '../Pages/Dashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='signin' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;