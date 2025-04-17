import React from 'react';

const LoginCliente = () => {
  return (
    <div className="container-login-cliente">
      <div className="login-imagem">
        <img src="/img/ImagemCliente.jpg" alt="Imagem agrícola" />
      </div>
      <div className="login-form-cliente">
        <img src="/img/LogoClara.png" alt="Logo AgroConecta" className="logo-cliente" />
        <h1 className="titulo-cliente">LOGIN</h1>
        <form>
          <label htmlFor="email-cliente">Email</label>
          <input type="email" id="email-cliente" placeholder="Digite seu e-mail aqui" />
          <label htmlFor="senha-cliente">Senha</label>
          <input type="password" id="senha-cliente" placeholder="Digite sua senha aqui" />
          <button type="submit" id="btn-cliente" disabled>ENTRAR</button>
          <div className="links-acesso">
            <a href="#">Esqueci minha senha</a>
            <span>|</span>
            <a href="#">Cadastre-se</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCliente;
