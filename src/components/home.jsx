import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const TelaInicial = () => (
  <div className="container-home">
    <Link to="/login-agricultor" className="panel panel-left">
      <div className="overlay" />
      <div className="content">
        <img className="icon" src="/img/Simbolo Agricultor.png" alt="Ícone Agricultor" />
        <h2>QUERO VENDER</h2>
      </div>
    </Link>
    <Link to="/login-cliente" className="panel panel-right">
      <div className="overlay" />
      <div className="content">
        <img className="icon" src="/img/Simbolo Cliente.png" alt="Ícone Cliente" />
        <h2>QUERO COMPRAR</h2>
      </div>
    </Link>
  </div>
);

export default TelaInicial;
