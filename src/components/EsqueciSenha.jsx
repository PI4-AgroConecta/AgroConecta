import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EsqueciSenha.css';

const EsqueciSenha = () => {
  const navigate = useNavigate();
  const [emailEnviado, setEmailEnviado] = useState(false);
  const [codigo, setCodigo] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setEmailEnviado(true);
    setMensagemErro('');
  };

  const handleChangeCodigo = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Apenas números
    if (value.length <= 6) {
      setCodigo(value);
      setMensagemErro('');
    }

    if (value.length === 6) {
      if (value === '123456') {
        navigate('/redefinir-senha');
      } else {
        setMensagemErro('Código incorreto. Tente novamente.');
        setCodigo('');
      }
    }
  };

  const fecharPopup = () => {
    setEmailEnviado(false);
    setCodigo('');
    setMensagemErro('');
  };

  return (
    <div className="senha-page">
      <main className="senha-main">
        <img src="/img/logoEscura.png" alt="Logo AgroConecta" className="senha-logo" />
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

      {emailEnviado && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Digite o código de verificação</h2>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={codigo}
              onChange={handleChangeCodigo}
              className="codigo-input"
              autoFocus
            />
            {mensagemErro && (
              <p className="mensagem-erro">{mensagemErro}</p>
            )}
            <p>Verifique seu e-mail para o código.</p>
            <button onClick={fecharPopup} className="fechar-popup">Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EsqueciSenha;
