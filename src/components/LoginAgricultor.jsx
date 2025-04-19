import React from 'react';

const LoginAgricultor = () => {
  return (
    <div className="container-login-agricultor">
      <div className="login-imagem agricultor">
        {/* A imagem de fundo será controlada via CSS */}
      </div>
      <div className="login-form-agricultor">
        <img src="/img/logoEscura.png" alt="Logo AgroConecta" className="logo-agricultor" />
        <h1 className="titulo-agricultor">LOGIN</h1>
        <form>
          <label htmlFor="email-agricultor">Email</label>
          <input type="email" id="email-agricultor" placeholder="Digite seu e-mail aqui" />
          <label htmlFor="senha-agricultor">Senha</label>
          <input type="password" id="senha-agricultor" placeholder="Digite sua senha aqui" />
          <button type="submit" id="btn-agricultor" disabled>ENTRAR</button>
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

export default LoginAgricultor;
