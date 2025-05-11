import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import TelaPrincipal from './components/TelaPrincipal';
import LoginCliente from './components/LoginCliente';
import LoginAgricultor from './components/LoginAgricultor';
import Cadastro from './components/Cadastro';
import EsqueciSenha from './components/EsqueciSenha';
import RedefinirSenha from './components/RedefinirSenha'; // ✅ Importação adicionada
import Maps from './components/Maps';
import AdmProdutor from './components/AdmProdutor';
import PerfilFazenda from './components/PerfilFazenda';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tela-principal" element={<TelaPrincipal />} />
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/login-agricultor" element={<LoginAgricultor />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} /> {/* ✅ Nova rota adicionada */}
        <Route path="/maps" element={<Maps />} />
        <Route path="/adm-produtor" element={<AdmProdutor />} />
        <Route path="/perfil-fazenda" element={<PerfilFazenda />} />
      </Routes>
    </Router>
  );
}

export default App;
