
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cadastro.css';

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/'); 
  };

  return (
    <div className="cadastro-page">
      <main className="cadastro-main">
        <img src="/img/logoEscura.png" alt="Logo AgroConecta" className="cadastro-logo" />
        <h1 className="cadastro-title">Criar Conta</h1>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome completo" className="cadastro-input" required />
          <input type="email" placeholder="Email" className="cadastro-input" required />
          <input type="text" placeholder="CPF" className="cadastro-input" required />
          <input type="text" placeholder="CEP" className="cadastro-input" required />
          <input type="text" placeholder="Número da casa" className="cadastro-input" required />

          <label htmlFor="perfil" className="cadastro-label">
            Você deseja se cadastrar como:
          </label>
          <select id="perfil" className="cadastro-select">
            <option value="cliente">Cliente</option>
            <option value="agricultor">Agricultor</option>
            <option value="ambos">Ambos</option>
          </select>

          <button type="submit" className="cadastro-button">
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Cadastro;
