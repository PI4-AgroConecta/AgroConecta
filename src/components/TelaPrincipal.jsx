import React, { useEffect } from 'react';
import '../styles/global.css';

const TelaPrincipal = () => {
  useEffect(() => {
    if (window.$ && window.$('.owl-carousel').owlCarousel) {
      window.$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
        }
      });
    }
  }, []);

  return (
    <>
      <header className="main-header">
        <img src="/img/Logo1.png" alt="Logo" className="logo" />
        <nav className="nav-buttons">
          <div className="button-container">
            <div className="button-bg"></div>
            <div className="button-text">RESERVADOS</div>
          </div>
          <div className="button-container">
            <div className="button-bg"></div>
            <div className="button-text">PERFIL</div>
          </div>
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
                  <p>Agricultores locais batem recorde de vendas com produtos orgânicos e artesanais.</p>
                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="s2" />
            <label htmlFor="s2" className="carrossel-simples-card">
              <div className="row">
                <div className="icon">2</div>
                <div className="description">
                  <h4>Sabor da Terra</h4>
                  <p>Agricultura familiar ganha espaço na merenda escolar e valoriza o alimento de verdade.</p>
                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="s3" />
            <label htmlFor="s3" className="carrossel-simples-card">
              <div className="row">
                <div className="icon">3</div>
                <div className="description">
                  <h4>Do Campo pra Mesa</h4>
                  <p>Famílias rurais se destacam na produção sustentável e fortalecem a economia local.</p>
                </div>
              </div>
            </label>

            <input type="radio" name="slide" id="s4" />
            <label htmlFor="s4" className="carrossel-simples-card">
              <div className="row">
                <div className="icon">4</div>
                <div className="description">
                  <h4>Jovens no Campo</h4>
                  <p>Nova geração aposta na agroecologia e resgata o orgulho de viver da terra.</p>
                </div>
              </div>
            </label>
          </div>
        </section>

        <section className="secao-capa-destaque">
          <div className="overlay">
            <div className="conteudo">
              <h2 className="titulo-capa">Abra sua fazenda na AgroConecta e leve seus produtos para mais pessoas!</h2>
              <p className="subtitulo-capa">
                Conecte-se diretamente com consumidores que valorizam produtos frescos e de qualidade.
                Cadastre-se agora e comece a vender no nosso marketplace de pequenos agricultores!
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
