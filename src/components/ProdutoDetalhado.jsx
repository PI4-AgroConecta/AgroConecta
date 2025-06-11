// src/components/ProdutoDetalhado.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/anuncio.css';

const ProdutoDetalhado = () => {
  const navigate = useNavigate();
  const unitPrice = 6.0; // R$ 6,00 por kg

  const [pesoEscolhido, setPesoEscolhido] = useState('');
  const [customPeso, setCustomPeso] = useState('');
  const [horarioEscolhido, setHorarioEscolhido] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const produto = {
    nome: 'Tomate Orgânico',
    imagem: '/img/Tomate1.jpeg',
    descricao: 'Tomates frescos, orgânicos e suculentos, colhidos diariamente sem agrotóxicos.',
    tipos: ['0.5kg', '1kg', '2kg'],
    horarios: [
      'Segunda 12/06 • 09:00–12:00',
      'Quarta 14/06 • 14:00–18:00',
      'Sábado 17/06 • 08:00–11:00'
    ]
  };

  const calculaPreco = () => {
    const peso = pesoEscolhido === 'custom'
      ? parseFloat(customPeso)
      : parseFloat(pesoEscolhido);
    if (!peso || peso <= 0) return null;
    return (peso * unitPrice).toFixed(2).replace('.', ',');
  };

  const handleConfirmar = () => {
    if ((!pesoEscolhido || (pesoEscolhido === 'custom' && !customPeso)) || !horarioEscolhido) {
      return alert('Selecione peso e horário para confirmar.');
    }
    setShowPopup(true);
  };

  const fecharPopup = () => {
    setShowPopup(false);
    navigate('/perfil-cliente');
  };

  return (
    <>
      <header className="main-header">
        <img
          src="/img/Logo1.png"
          alt="Logo"
          className="logo"
          onClick={() => navigate('/')}
        />
        <nav className="nav-buttons">
         <div
            className="button-container"
            onClick={() => navigate('/Tela-Principal')}
          >
            <div className="button-bg" />
            <div className="button-text">Home</div>
          </div>
          <div
            className="button-container"
            onClick={() => navigate('/perfil-cliente')}
          >
            <div className="button-bg" />
            <div className="button-text">PERFIL</div>
          </div>
          <div
            className="button-container logout-button"
            onClick={() => navigate('/')}
          >
            <div className="button-bg" />
            <div className="button-text">SAIR</div>
          </div>
        </nav>
      </header>

      <main className="produto-detalhado produto-detalhado-container">
        <aside className="produto-imagem">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="imagem-detalhada"
          />
        </aside>

        <section className="produto-info">
          <h2 className="titulo-produto">{produto.nome}</h2>
          <p className="descricao-produto">{produto.descricao}</p>

          <div className="peso-selector">
            <h4>Escolha o peso:</h4>
            <div className="opcoes-peso">
              {produto.tipos.map((tipo) => (
                <label
                  key={tipo}
                  className={`peso-opcao ${
                    pesoEscolhido === tipo ? 'ativo' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="peso"
                    value={tipo}
                    checked={pesoEscolhido === tipo}
                    onChange={() => {
                      setPesoEscolhido(tipo);
                      setCustomPeso('');
                    }}
                  />
                  {tipo}
                </label>
              ))}

              <label
                className={`peso-opcao ${pesoEscolhido === 'custom' ? 'ativo' : ''}`}
              >
                <input
                  type="radio"
                  name="peso"
                  value="custom"
                  checked={pesoEscolhido === 'custom'}
                  onChange={() => setPesoEscolhido('custom')}
                />
                Outro peso
              </label>
            </div>

            {pesoEscolhido === 'custom' && (
              <input
                type="number"
                min="0.1"
                step="0.1"
                placeholder="kg (ex: 1.5)"
                className="custom-peso-input"
                value={customPeso}
                onChange={(e) => setCustomPeso(e.target.value)}
              />
            )}
          </div>

          {calculaPreco() && (
            <p className="preco-produto-detalhado">
              <strong>Preço:</strong> R$ {calculaPreco()}
            </p>
          )}

          <div className="horario-selector">
            <h4>Escolha o horário de retirada:</h4>
            <div className="opcoes-horario">
              {produto.horarios.map((h) => (
                <label
                  key={h}
                  className={`peso-opcao ${
                    horarioEscolhido === h ? 'ativo' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="horario"
                    value={h}
                    checked={horarioEscolhido === h}
                    onChange={() => setHorarioEscolhido(h)}
                  />
                  {h}
                </label>
              ))}
            </div>
          </div>

          <button className="botao-confirmar" onClick={handleConfirmar}>
            Confirmar Retirada
          </button>
        </section>
      </main>

      {/* Popup de confirmação */}
      {showPopup && (
        <div className="modal-overlay" onClick={fecharPopup}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>Retirada Confirmada!</h3>
            <p>Sua retirada foi agendada com sucesso.</p>
            <button className="botao-confirmar" onClick={fecharPopup}>
              OK
            </button>
          </div>
        </div>
      )}

      <section className="retirada-info">
        <h3>Informações de Retirada</h3>
        <div className="retirada-local">
          <h4>Local:</h4>
          <p>Rua das Flores, 123 – Jardim Orgânico, Piracicaba – SP</p>
        </div>
        <div className="retirada-contato">
          <h4>Contato:</h4>
          <p>
            Tel: (19) 91234-5678 | WhatsApp: (19) 99876-5432 | E-mail:
            contato@hortadoclara.com
          </p>
        </div>
        <div className="retirada-pagamento">
          <h4>Pagamento:</h4>
          <ul>
            <li>Dinheiro</li>
            <li>Pix: 19.91234.5678</li>
            <li>Cartão de Débito/Crédito</li>
          </ul>
          <p className="obs-pagamento">
            *A plataforma atua apenas como intermediária. Entre em contato
            com o produtor para acertar pagamento antes ou no momento da
            retirada.
          </p>
        </div>
      </section>

      <footer className="main-footer">
        <img src="/img/LogoClara.png" alt="Logo" className="logo" />
      </footer>
    </>
  );
};

export default ProdutoDetalhado;
