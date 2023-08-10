import React from 'react'
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;