import React from 'react';

const LoginCliente = () => {
  return (
    <div className="container-login-cliente">
      <div className="login-imagem cliente"></div>
      <div className="login-form-cliente">
        <img src="/img/LogoClara.png" alt="Logo AgroConecta" className="logo-cliente" />
        <h1 className="titulo-cliente">LOGIN</h1>
        <form className="form-cliente">
          <label htmlFor="email-cliente">Email</label>
          <input
            type="email"
            id="email-cliente"
            className="cliente-placeholder"
            placeholder="Digite seu e-mail aqui"
          />
          <label htmlFor="senha-cliente">Senha</label>
          <input
            type="password"
            id="senha-cliente"
            className="cliente-placeholder"
            placeholder="Digite sua senha aqui"
          />
          <button type="submit" id="btn-cliente" disabled>ENTRAR</button>
        </form>
        <div className="links-cliente">
          <a href="#">Cadastre-se</a>
          <span>|</span>
          <a href="#">Esqueci minha senha</a>
        </div>
      </div>
    </div>
  );
};

export default LoginCliente;
