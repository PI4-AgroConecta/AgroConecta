import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  
    return (
      <div className="container">
        <div className="panel panel-left" onClick={() => navigate('/login-agricultor')}>
          <div className="overlay"></div>
          <div className="content">
            <img className="icon" src="/img/Simbolo Agricultor.png" alt="Ícone Agricultor" />
            <h2>QUERO VENDER</h2>
          </div>
        </div>
        <div className="panel panel-right" onClick={() => navigate('/login-cliente')}>
          <div className="overlay"></div>
          <div className="content">
            <img className="icon" src="/img/Simbolo Cliente.png" alt="Ícone Cliente" />
            <h2>QUERO COMPRAR</h2>
          </div>
        </div>
      </div>
    );
  };
  
export default Home;
