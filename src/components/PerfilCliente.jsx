import '../styles/PerfilFazenda.css';
import { useState } from "react";

import capaImg from './../images/hortaDonaClaraCapa.png';
import perfilImg from '/img/Perfil-Cliente.jpeg';

const PerfilCliente = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="perfil-container">
      <button className="menu-button" onClick={() => setShowMenuModal(true)}>☰</button>
      {showMenuModal && (
        <div className="modal-overlay" onClick={() => setShowMenuModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowMenuModal(false)}>X</button>
            <nav className="modal-nav">
              <a href="/">Meu Perfil</a>
              <a href="/">Minhas Reservas</a>
            </nav>
          </div>
        </div>
      )}

      <header className="main-header">
        <a href="/tela-principal">
          <img src="/img/Logo1.png" alt="Logo" className="logo" />
        </a>
        <nav className="nav-buttons">
          <div className="button-container">
            <div className="button-bg"></div>
            <div className="button-text">CARRINHO</div>
          </div>
          <div className="button-container">
            <div className="button-bg"></div>
            <div className="button-text">PERFIL</div>
          </div>
        </nav>
      </header>

      <div className="capa">
        <img src={capaImg} alt="Capa" className="capa-img" />
      </div>

      <div className="perfil-conteudo">
        <img src={perfilImg} alt="Foto do Cliente" className="foto-perfil" />

        <div className="perfil-colunas">
          <form className="formulario-perfil" onSubmit={handleSubmit}>
            <h2>Perfil</h2>

            <div className="form-grid">
              <div className="form-col">
                <label>
                  Nome Completo:
                  <input type="text" defaultValue="João Silva" />
                </label>
                <label>
                  E-mail:
                  <input type="email" defaultValue="joao@email.com" />
                </label>
                <label>
                  Telefone:
                  <input type="tel" defaultValue="(11) 91234-5678" />
                </label>
                <label>
                  Endereço:
                  <input type="text" defaultValue="Rua das Hortas, 123" />
                </label>
                <label>
                  Cidade/Estado:
                  <input type="text" defaultValue="Piracicaba - SP" />
                </label>
              </div>

              <div className="form-col">
                <label>
                  CPF:
                  <input type="text" defaultValue="123.456.789-00" />
                </label>
                <label>
                  Data de Nascimento:
                  <input type="date" defaultValue="1990-01-01" />
                </label>
                <label>
                  Observações:
                  <textarea defaultValue="Cliente desde 2023, com preferência por produtos orgânicos."></textarea>
                </label>
              </div>
            </div>
          </form>

          <div className='div-esquerda'>
            <div className="carrossel-produtos">
              <h3>Minhas Reservas</h3>
              <div className="carrossel-container">
                {[1, 2, 3].map((reserva) => (
                  <div className="produto-card" key={reserva}>
                    <h4>Reserva #{reserva}</h4>
                    <p><strong>Produto:</strong> Cesta Orgânica</p>
                    <p><strong>Data:</strong> 10/06/2025</p>
                    <p><strong>Horário:</strong> 14:00</p>
                    <a href="#" className="btn-ver">Ver detalhes</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {showPopup && <div className="popup-sucesso">Perfil atualizado com sucesso!</div>}
      </div>
    </div>
  );
};

export default PerfilCliente;
