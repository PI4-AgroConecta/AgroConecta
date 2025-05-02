
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import TelaPrincipal from './components/TelaPrincipal';
import LoginCliente from './components/LoginCliente';
import LoginAgricultor from './components/LoginAgricultor';
import Cadastro from './components/Cadastro';
import EsqueciSenha from './components/EsqueciSenha';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota da home (tela inicial) */}
        <Route path="/" element={<Home />} />

        {/* Rota para a página principal pós-login ou destaques */}
        <Route path="/tela-principal" element={<TelaPrincipal />} />

        {/* Rotas de login */}
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/login-agricultor" element={<LoginAgricultor />} />

        {/* Rotas de cadastro e esqueci a senha */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />

        {/* Se quiser uma rota “catch-all” para 404, pode adicionar: */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
