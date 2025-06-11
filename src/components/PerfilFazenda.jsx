import '../styles/PerfilFazenda.css';
import { useState } from "react";

import capaImg from './../images/hortaDonaClaraCapa.png';
import perfilImg from './../images/hortaDonaClara.png';
import imgLocal1 from './../images/hortaDonaClaraLocal.png';
import imgLocal2 from './../images/hortaDonaClaraLocal2.png';
import imgLocal3 from './../images/hortaDonaClaraLocal3.png';
import imgLocal4 from './../images/hortaDonaClaraLocal4.png';

const PerfilFazenda = () => {
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
              <a href="/">Reservas</a>
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
        <img src={capaImg} alt="Capa da Fazenda" className="capa-img" />
      </div>

      <div className="perfil-conteudo">
        <img src={perfilImg} alt="Foto da Fazenda" className="foto-perfil" />

        <div className="perfil-colunas">
          <form className="formulario-perfil" onSubmit={handleSubmit}>
            <h2>Fazenda Dona Clara</h2>

            <div className="form-grid">
              <div className="form-col">
                <label>
                  Nome do Estabelecimento:
                  <input type="text" defaultValue="Fazenda Dona Clara" />
                </label>
                <label>
                  E-mail:
                  <input type="email" defaultValue="horta_clara@email.com" />
                </label>
                <label>
                  CEP:
                  <input type="text" defaultValue="08250-650" />
                </label>
                <label>
                  Endereço:
                  <input type="text" defaultValue="Estrada Rural, km 15" />
                </label>
                <label>
                  Bairro:
                  <input type="text" defaultValue="Bairro Verde" />
                </label>
                <label>
                  Cidade/Estado:
                  <input type="text" defaultValue="Piracicaba - SP" />
                </label>
              </div>

              <div className="form-col">
                <label>
                  Nome do Responsável:
                  <input type="text" defaultValue="Clara Maria" />
                </label>
                <label>
                  Contato:
                  <input type="tel" defaultValue="(11) 91234-5678" />
                </label>
                <label>
                  Descrição:
                  <textarea defaultValue="Produtora de alimentos orgânicos desde 2005, com foco em sustentabilidade e qualidade."></textarea>
                </label>
              </div>
            </div>
          </form>

          <div className='div-esquerda'>
            {/* Carrossel de Produtos à Venda */}
            <div className="carrossel-produtos">
              <h3>Produtos à Venda</h3>
              <div className="carrossel-container">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div className="produto-card" key={item}>
                    <img src={imgLocal1} alt={`Produto ${item}`} className="produto-img" />
                    <h4>Produto {item}</h4>
                    <p>R$ 15,00</p>
                    <a href="#" className="btn-ver">Ver mais</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Galeria de fotos do local */}
            <div className="galeria-fotos">
              <h3>Galeria de Fotos</h3>
              <div className="fotos-grid">
                <img className="foto-item-local" src={imgLocal1} alt="" />
                <img className="foto-item-local" src={imgLocal2} alt="" />
                <img className="foto-item-local" src={imgLocal3} alt="" />
                <img className="foto-item-local" src={imgLocal4} alt="" />
              </div>
            </div>

            <div className="carrossel-produtos fotos-local">
              <h3>Galeria de Fotos</h3>
              <div className="carrossel-container">
                {[1, 2, 3, 4].map((item) => (
                  <div className="produto-card" key={item}>
                    <img className="foto-item-local" src={imgLocal4} alt="" />
                  </div>
                ))}
              </div>
            </div>

            <div className="carrossel-produtos">
              <h3>Avaliações</h3>
              <div className="carrossel-container">
                {[1, 2, 3, 4].map((item) => (
                  <div className="produto-card" key={item}>
                    {/* Aqui usa a URL direta da imagem no public */}
                    <img src="/img/cliente1.png" alt='foto-usuario' className="img-avaliacao" />
                    <h4 className='title-avaliacao'>Usuário</h4>
                    <p className='p-avaliacao'>Produtor responsável com excelentes produtos. Recomendo a todos!</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PerfilFazenda;
