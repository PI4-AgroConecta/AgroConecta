import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css'; // Garanta que esse CSS exista

const TelaPrincipal = () => {
  const navigate = useNavigate();

  const irParaPerfil = () => {
    navigate('/perfil-cliente');
  };

  return (
    <>
      <header className="main-header">
        <img src="/img/Logo1.png" alt="Logo" className="logo" />

        <nav className="nav-buttons">
          <button className="button-container">
            <div className="button-bg"></div>
            <div className="button-text">RESERVADOS</div>
          </button>

          <button className="button-container" onClick={irParaPerfil}>
            <div className="button-bg"></div>
            <div className="button-text">PERFIL</div>
          </button>
        </nav>
      </header>

      <main>
        <section className="carrossel-simples-wrapper">
          <div className="carrossel-simples-container">
            <input type="radio" name="slide" id="s1" defaultChecked />
            <label htmlFor="s1" className="carrossel-simples-card">
              <div className="row">
                <div className="icon">1</div>
                <div className="description">
                  <h4>Feira da Roça</h4>
                  <p>Produtos orgânicos e artesanais com grande sucesso.</p>
                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="s2" />
            <label htmlFor="s2" className="carrossel-simples-card">
              <div className="row">
                <div className="icon">2</div>
                <div className="description">
                  <h4>Sabor da Terra</h4>
                  <p>Agricultura familiar presente na merenda escolar.</p>
                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="s3" />
            <label htmlFor="s3" className="carrossel-simples-card">
              <div className="row">
                <div className="icon">3</div>
                <div className="description">
                  <h4>Do Campo pra Mesa</h4>
                  <p>Produção sustentável fortalece a economia local.</p>
                </div>
              </div>
            </label>
          </div>
        </section>

        <section className="secao-capa-destaque">
          <div className="overlay">
            <div className="conteudo">
              <h2 className="titulo-capa">
                Abra sua fazenda na AgroConecta!
              </h2>
              <p className="subtitulo-capa">
                Cadastre-se e leve seus produtos direto ao consumidor.
              </p>
              <a href="#" className="botao-abrir-fazenda">Abrir Fazenda</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <img src="/img/LogoClara.png" alt="Logo" className="logo" />
      </footer>
    </>
  );
};

export default TelaPrincipal;
