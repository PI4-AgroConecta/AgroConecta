import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate
import '../styles/global.css';

const TelaPrincipal = () => {
  const navigate = useNavigate(); // Inicialize o hook useNavigate

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

  // Esta função agora será chamada corretamente
  const irParaPerfil = () => {
    navigate('/perfil-cliente');
  };

  const irParaPrincipal = () => {
    navigate('/');
  };

  const produtos = [
    { id: 1, nome: 'Tomate Orgânico', preco: 'R$ 6,00/kg', imagem: '/src/images/tomate.jpg'},
    { id: 2, nome: 'Alface Crespa', preco: 'R$ 3,50/un', imagem: '/img/P1.jpeg' },
    { id: 3, nome: 'Mel Puro', preco: 'R$ 18,00/pote', imagem: '/src/images/mel.jpg' },
    { id: 4, nome: 'Queijo Minas', preco: 'R$ 28,00/kg', imagem: '/src/images/queijominas.jpg'},
    { id: 5, nome: 'Ovos Caipiras', preco: 'R$ 12,00/dúzia', imagem: '/src/images/ovos.jpg' },
  ];

  const fazendasProximas = [
    { id: 1, nome: 'Fazenda Raízes ', distancia: '2 km', imagem: '/src/images/fazenda1.jpg' },
    { id: 2, nome: 'Sítio Esperança ', distancia: '4 km', imagem: '/src/images/fazenda2.jpg' },
    { id: 3, nome: 'Fazenda Horizonte', distancia: '5 km', imagem: '/src/images/fazenda3.jpg' },
    { id: 4, nome: 'Chácara Coração', distancia: '6.5 km', imagem: '/src/images/fazenda4.jpg' },
    { id: 5, nome: 'Sítio Colheita', distancia: '7 km', imagem: '/src/images/fazenda5.jpg' },
  ];

  return (
    <>
      <header className="main-header">
        <img src="/img/Logo1.png" alt="Logo" className="logo" />
        <nav className="nav-buttons">
          <div className="button-container">
            <div className="button-bg"></div>
            <div className="button-text">CARRINHO</div>
          </div>

          <div className="button-container" onClick={irParaPerfil}> {/* <--- CORREÇÃO AQUI */}
            <div className="button-bg"></div>
            <div className="button-text">PERFIL</div>
          </div>
 <div className="button-container logout-button" onClick={irParaPrincipal}>
            <div className="button-bg"></div>
            <div className="button-text">SAIR</div>
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

        <section className="secao-cards-produto">
          <h2 className="titulo-cards">Produtos em Destaque</h2>
          <div className="container-cards">
            {produtos.map(produto => (
              <div className="card-produto" key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} className="imagem-produto" />
                <h3 className="nome-produto">{produto.nome}</h3>
                <p className="preco-produto">{produto.preco}</p>
                <button className="botao-comprar">Comprar</button>
              </div>
            ))}
          </div>
        </section>

        <section className="secao-capa-destaque">
          <div className="overlay">
            <div className="conteudo">
              <h2 className="titulo-capa">Nossos agricultores estão por todos os lugares!</h2>
              <p className="subtitulo-capa">
                Conecte-se diretamente com consumidores que valorizam produtos frescos e de qualidade.
                Venha encontrar a Fazenda mais próxima de você!</p>
              <a href="/maps" className="botao-abrir-fazenda">Encontrar Fazenda</a>
            </div>
          </div>
        </section>
      </main>

      <section className="secao-cards-fazendas">
        <h2 className="titulo-cards">Fazendas Próximas</h2>
        <div className="container-cards">
          {fazendasProximas.map(fazenda => (
            <div className="card-fazenda" key={fazenda.id}>
              <img src={fazenda.imagem} alt={fazenda.nome} className="imagem-fazenda" />
              <h3 className="nome-fazenda">{fazenda.nome}</h3>
              <p className="distancia-fazenda">{fazenda.distancia} de você</p>
              <button className="botao-visitar">Visitar</button>
            </div>
          ))}
        </div>
      </section>


      <footer className="main-footer">
        <img src="/img/LogoClara.png" alt="Logo" className="logo" />
      </footer>
    </>
  );
};

export default TelaPrincipal;

