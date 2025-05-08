import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cadastro.css';

const Cadastro = () => {
  const navigate = useNavigate();
  const [perfilSelecionado, setPerfilSelecionado] = useState('cliente');
  const [senha, setSenha] = useState('');
  const [requisitos, setRequisitos] = useState({
    letras: false,
    maiuscula: false,
    numeros: false,
    especial: false,
  });
  const [erro, setErro] = useState('');

  // Função para verificar os requisitos da senha
  const verificarRequisitos = (senha) => {
    setRequisitos({
      letras: /[a-zA-Z]{4,}/.test(senha),
      maiuscula: /[A-Z]/.test(senha),
      numeros: /\d{4,}/.test(senha),
      especial: /[!@#$%^&*(),.?":{}|<>]/.test(senha),
    });
  };

  // Verificar se a senha é válida
  const senhaValida =
    requisitos.letras && requisitos.maiuscula && requisitos.numeros && requisitos.especial;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se a senha está válida antes de permitir o envio
    if (!senhaValida) {
      setErro('A senha não atende aos requisitos.');
      return;
    }

    // Se a senha for válida, redireciona para a página inicial
    setErro('');
    navigate('/'); 
  };

  const handlePerfilChange = (event) => {
    setPerfilSelecionado(event.target.value);
  };

  const handleSenhaChange = (event) => {
    const senha = event.target.value;
    setSenha(senha);
    verificarRequisitos(senha);
  };

  return (
    <div className="cadastro-page">
      <main className="cadastro-main">
        <img src="/img/logoEscura.png" alt="Logo AgroConecta" className="cadastro-logo" />
        <h1 className="cadastro-title">Criar Conta</h1>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome completo" className="cadastro-input" required />
          <input type="email" placeholder="Email" className="cadastro-input" required />

          {/* Campo de senha */}
          <input
            type="password"
            placeholder="Senha"
            className="cadastro-input"
            required
            value={senha}
            onChange={handleSenhaChange}
          />

          {/* Exibe mensagem de erro caso a senha não seja válida */}
          {erro && <p className="erro-mensagem">{erro}</p>}

          {/* Requisitos da senha */}
          {senha && (
            <div className="senha-requisitos">
              <p className="senha-titulo">A senha deve conter:</p>
              <ul className="senha-lista">
                <li className={requisitos.letras ? 'valido' : 'invalido'}>
                * Pelo menos <strong>4 letras</strong>
                </li>
                <li className={requisitos.maiuscula ? 'valido' : 'invalido'}>
                * Pelo menos <strong>1 letra maiúscula</strong>
                </li>
                <li className={requisitos.numeros ? 'valido' : 'invalido'}>
                * Pelo menos <strong>4 números</strong>
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

          {/* Botão de cadastro */}
          <button type="submit" className="cadastro-button" disabled={!senhaValida}>
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Cadastro;
