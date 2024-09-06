// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './components/cadastro';
import Login from './components/login'; // Supondo que você tenha um componente de login
import Chat from './components/chat'; // Supondo que você tenha um componente de chat

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    );
}

export default App;
