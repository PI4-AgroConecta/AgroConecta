import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cadastro.css';

const Cadastro = () => {
  const navigate = useNavigate();
  const [perfilSelecionado, setPerfilSelecionado] = useState('cliente');
  const [senha, setSenha] = useState('');
  const [requisitos, setRequisitos] = useState({
    tamanho: false,
    maiuscula: false,
    minuscula: false,
    numero: false,
    especial: false,
  });
  const [erro, setErro] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const verificarRequisitos = (senha) => {
    setRequisitos({
      tamanho: senha.length >= 8,
      maiuscula: /[A-Z]/.test(senha),
      minuscula: /[a-z]/.test(senha),
      numero: /\d/.test(senha),
      especial: /[!@#$%^&*(),.?":{}|<>]/.test(senha),
    });
  };

  const senhaValida =
    requisitos.tamanho &&
    requisitos.maiuscula &&
    requisitos.minuscula &&
    requisitos.numero &&
    requisitos.especial;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!senhaValida) {
      setErro('A senha não atende aos requisitos.');
      return;
    }

    setErro('');
    setShowPopup(true); // Mostra o popup
  };

  const handlePerfilChange = (event) => {
    setPerfilSelecionado(event.target.value);
  };

  const handleSenhaChange = (event) => {
    const senha = event.target.value;
    setSenha(senha);
    verificarRequisitos(senha);
  };

  const fecharPopup = () => {
    setShowPopup(false);
    navigate('/tela-principal'); // redireciona para TelaPrincipal
  };

  return (
    <div className="cadastro-page">
      <main className="cadastro-main">
        <img src="/img/logoEscura.png" alt="Logo AgroConecta" className="cadastro-logo" />
        <h1 className="cadastro-title">Criar Conta</h1>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome completo" className="cadastro-input" required />
          <input type="email" placeholder="Email" className="cadastro-input" required />

          <input
            type="password"
            placeholder="Senha"
            className="cadastro-input"
            required
            value={senha}
            onChange={handleSenhaChange}
          />

          {erro && <p className="erro-mensagem">{erro}</p>}

          {senha && (
            <div className="senha-requisitos">
              <p className="senha-titulo">A senha deve conter:</p>
              <ul className="senha-lista">
                <li className={requisitos.tamanho ? 'valido' : 'invalido'}>
                  * No mínimo <strong>8 caracteres</strong>
                </li>
                <li className={requisitos.maiuscula ? 'valido' : 'invalido'}>
                  * Pelo menos <strong>1 letra maiúscula</strong>
                </li>
                <li className={requisitos.minuscula ? 'valido' : 'invalido'}>
                  * Pelo menos <strong>1 letra minúscula</strong>
                </li>
                <li className={requisitos.numero ? 'valido' : 'invalido'}>
                  * Pelo menos <strong>1 número</strong>
                </li>
                <li className={requisitos.especial ? 'valido' : 'invalido'}>
                  * Pelo menos <strong>1 caractere especial</strong>
                </li>
              </ul>
            </div>
          )}

          <input type="text" placeholder="CPF" className="cadastro-input" required />
          <input type="text" placeholder="CEP" className="cadastro-input" required />
          <input type="text" placeholder="Número da casa" className="cadastro-input" required />

          <label htmlFor="perfil" className="cadastro-label">
            Você deseja se cadastrar como:
          </label>
          <select
            id="perfil"
            className="cadastro-select"
            value={perfilSelecionado}
            onChange={handlePerfilChange}
          >
            <option value="cliente">Cliente</option>
            <option value="agricultor">Agricultor</option>
            <option value="ambos">Ambos</option>
          </select>

          <div className="icones-perfil">
            {(perfilSelecionado === 'cliente' || perfilSelecionado === 'ambos') && (
              <img src="/img/SimboloClienteEscuro.png" alt="Ícone Cliente" className="icone-perfil" />
            )}
            {(perfilSelecionado === 'agricultor' || perfilSelecionado === 'ambos') && (
              <img src="/img/SimboloAgricultorEscura.png" alt="Ícone Agricultor" className="icone-perfil" />
            )}
          </div>

          <button type="submit" className="cadastro-button" disabled={!senhaValida}>
            Cadastrar
          </button>
        </form>
      </main>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Cadastro realizado com sucesso!</h2>
            <button className="popup-button" onClick={fecharPopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cadastro;
