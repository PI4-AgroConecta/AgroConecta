import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EsqueciSenha.css';

const RedefinirSenha = () => {
  const navigate = useNavigate();
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [erroSenha, setErroSenha] = useState(''); // 🆕 Adicionado estado para erro

  const senhaValida =
    senha.length >= 8 &&
    /[A-Z]/.test(senha) &&
    /[a-z]/.test(senha) &&
    /[0-9]/.test(senha) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(senha);

  const podeEnviar = senhaValida && senha === confirmar;

  const handleSubmit = e => {
    e.preventDefault();
    if (podeEnviar) {
      setErroSenha(''); // limpa erro
      navigate('/');
    } else {
      setErroSenha('Verifique se a senha está correta e igual à confirmação.'); // 🆕 seta erro
    }
  };

  return (
    <div className="senha-page">
      <main className="senha-main">
        <img src="/img/logoEscura.png" alt="Logo AgroConecta" className="senha-logo" />
        <h1 className="senha-title">Redefinir Senha</h1>

        <form className="senha-form" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Nova senha"
            className="senha-input"
            value={senha}
            onChange={e => {
              setSenha(e.target.value);
              setErroSenha('');
            }}
            required
          />
          <input
            type="password"
            placeholder="Confirmar nova senha"
            className="senha-input"
            value={confirmar}
            onChange={e => {
              setConfirmar(e.target.value);
              setErroSenha('');
            }}
            required
          />

          {/* 🆕 Mensagem de erro visível se senha estiver preenchida e não coincidir */}
          {senha && confirmar && senha !== confirmar && (
            <p className="erro-senha">As senhas não coincidem.</p>
          )}

          {/* 🆕 Mensagem geral do botão */}
          {erroSenha && <p className="erro-senha">{erroSenha}</p>}

          <ul className="senha-requisitos">
            <li className={senha.length >= 8 ? 'valido' : ''}>* Mínimo 8 caracteres</li>
            <li className={/[A-Z]/.test(senha) ? 'valido' : ''}>* Letra maiúscula</li>
            <li className={/[a-z]/.test(senha) ? 'valido' : ''}>* Letra minúscula</li>
            <li className={/[0-9]/.test(senha) ? 'valido' : ''}>* Número</li>
            <li className={/[!@#$%^&*(),.?":{}|<>]/.test(senha) ? 'valido' : ''}>* Caractere especial</li>
          </ul>

          <button type="submit" className="senha-button" disabled={!podeEnviar}>
            Redefinir Senha
          </button>
        </form>
      </main>
    </div>
  );
};

export default RedefinirSenha;
