import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import LoginCliente from './components/LoginCliente';
import LoginAgricultor from './components/LoginAgricultor';
import TelaPrincipal from './components/TelaPrincipal'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/login-agricultor" element={<LoginAgricultor />} />
        <Route path="/tela-principal" element={<TelaPrincipal />} /> 
      </Routes>
    </Router>
  );
}

export default App;
