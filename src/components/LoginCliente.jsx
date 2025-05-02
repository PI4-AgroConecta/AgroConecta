import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const LoginCliente = () => {
  const navigate = useNavigate();
  
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/tela-principal');
  };

  return (
    <div className="container-login-cliente">
      <div className="login-imagem cliente" />
      <div className="login-form-cliente">
        <img src="/img/LogoClara.png" alt="Logo AgroConecta" className="logo-cliente" />
        <h1 className="titulo-cliente">LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email-cliente">Email:</label>
          <input
            type="email"
            id="email-cliente"
            placeholder="Digite seu e-mail aqui"
            required
          />
          <label htmlFor="senha-cliente">Senha:</label>
          <input
            type="password"
            id="senha-cliente"
            placeholder="Digite sua senha aqui"
            required
          />
          <button type="submit" id="btn-cliente">ENTRAR</button>
        </form>
        <div className="links-cliente">
          <Link to="/cadastro">Cadastre-se</Link>
          <span> | </span>
          <Link to="/esqueci-senha">Esqueci minha senha</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginCliente;
