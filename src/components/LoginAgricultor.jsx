import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const LoginAgricultor = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/tela-principal');
  };

  return (
    <div className="container-login-agricultor">
      <div className="login-imagem agricultor" />
      <div className="login-form-agricultor">
        <img src="/img/logoEscura.png" alt="Logo AgroConecta" className="logo-agricultor" />
        <h1 className="titulo-agricultor">LOGIN</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email-agricultor">Email:</label>
          <input
            type="email"
            id="email-agricultor"
            placeholder="Digite seu e-mail aqui"
            required
          />

          <label htmlFor="senha-agricultor">Senha:</label>
          <input
            type="password"
            id="senha-agricultor"
            placeholder="Digite sua senha aqui"
            required
          />

          <button type="submit"id="btn-agricultor" >ENTRAR</button>
        </form>

        <div className="links-agricultor">
          <Link to="/cadastro" >Cadastre-se</Link>
          <span> | </span>
          <Link to="/esqueci-senha">Esqueci minha senha</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAgricultor;
