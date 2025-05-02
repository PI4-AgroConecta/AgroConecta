import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EsqueciSenha.css';

const EsqueciSenha = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="senha-page">
      <main className="senha-main">
        <img
          src="/img/logoEscura.png"
          alt="Logo AgroConecta"
          className="senha-logo"
        />

        <h1 className="senha-title">Recuperar Senha</h1>

        <form className="senha-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="senha-input"
            required
          />
          <button type="submit" className="senha-button">
            Enviar Recuperação
          </button>
        </form>
      </main>
    </div>
  );
};

export default EsqueciSenha;
