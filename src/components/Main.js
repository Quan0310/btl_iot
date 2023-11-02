import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Historytest from './pages/Historytest';
import History from './pages/History';
const Main = (props) => (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/history" element={<Historytest/>} />

    </Routes>
)

export default Main;