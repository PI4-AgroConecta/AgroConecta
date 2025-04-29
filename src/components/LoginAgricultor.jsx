import React from 'react';

const LoginAgricultor = () => {
  return (
    <div className="container-login-agricultor">
      <div className="login-imagem agricultor"></div>
      <div className="login-form-agricultor">
        <img src="/img/logoEscura.png" alt="Logo AgroConecta" className="logo-agricultor" />
        <h1 className="titulo-agricultor">LOGIN</h1>
        <form className="form-agricultor">
          <label htmlFor="email-agricultor">Email</label>
          <input
            type="email"
            id="email-agricultor"
            className="agricultor-placeholder"
            placeholder="Digite seu e-mail aqui"
          />
          <label htmlFor="senha-agricultor">Senha</label>
          <input
            type="password"
            id="senha-agricultor"
            className="agricultor-placeholder"
            placeholder="Digite sua senha aqui"
          />
          <button type="submit" id="btn-agricultor" disabled>ENTRAR</button>
        </form>
        <div className="links-agricultor">
          <a href="#">Cadastre-se</a>
          <span>|</span>
          <a href="#">Esqueci minha senha</a>
        </div>
      </div>
    </div>
  );
};

export default LoginAgricultor;
