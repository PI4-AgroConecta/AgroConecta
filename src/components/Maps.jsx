import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

import '../styles/Maps.css';

import donaClaraImg from '../images/hortaDonaClara.png';
import mundoVerdeImg from '../images/hortaMundoVerde.png';
import hortaSebastiaoImg from '../images/hortaSebastiao.png';
import L from 'leaflet';

const comercios = [
  {
    nome: "Padaria Central",
    posicao: [-23.55052, -46.633308],
    descricao: "Cultivo orgânico.",
    endereco: "Estrada Rural, km 15 - Bairro Verde",
    imagem: donaClaraImg,
    link: "/perfil-fazenda",
  },
  {
    nome: "Mercado Popular",
    posicao: [-23.552, -46.632],
    descricao: "Produtos frescos todos os dias.",
    endereco: "Estrada Rural, km 15 - Bairro Verde",
    imagem: mundoVerdeImg,
    link: "/mercado-popular",
  },
  {
    nome: "Livraria Cultura Viva",
    posicao: [-23.549, -46.635],
    descricao: "Agricultura familiar.",
    endereco: "Estrada Rural, km 15 - Bairro Verde",
    imagem: hortaSebastiaoImg,
    link: "/livraria-cultura-viva",
  },
];

const Maps = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);


  return (
    <div className="map-page">

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
        <img src="/img/Logo1.png" alt="Logo" className="logo" />
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

      <h1 className="map-title">Encontre fazendas perto de você</h1>

      <button className="filtro-button" onClick={() => setShowFilterModal(true)}>Filtros</button>
      {showFilterModal && (
        <div className="modal-overlay" onClick={() => setShowFilterModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowFilterModal(false)}>X</button>
            <div className="filters-panel-dropdown">
              <h1>Filtro de busca</h1>
              <div className="filter-item">
                <label>Tipo de Produto</label>
                <select className="custom-select">
                  <option value="verdura">Verdura</option>
                  <option value="legume">Legume</option>
                  <option value="fruta">Fruta</option>
                  <option value="hortalica">Hortaliça</option>
                </select>
              </div>

              <div className="filter-item">
                <label>Tipo de Cultivo</label>
                <select className="custom-select">
                  <option value="tradicional">Tradicional</option>
                  <option value="organico">Orgânico</option>
                </select>
              </div>

              <div className="filter-item">
                <label>Proximidade</label>
                <input
                  type="range"
                  className="range-slider"
                  min="0"
                  max="50"
                  step="1"
                  defaultValue="10"
                />
                <input
                  type="number"
                  min="0"
                  max="50"
                  defaultValue="10"
                  className="range-slider"
                />
              </div>

              {/* Filtro por Faixa de Preço */}
              <div className="filter-item">
                <label>Faixa de Preço</label>
                <input
                  type="range"
                  className="range-slider"
                  min="0"
                  max="500"
                  step="1"
                  defaultValue="100"
                />
                <input
                  type="number"
                  min="0"
                  max="500"
                  defaultValue="100"
                  className="range-slider"
                />
              </div>

              {/* Filtro por Avaliação */}
              <div className="filter-item">
                <label>Avaliação (Estrelas)</label>
                <select className="custom-select">
                  <option value="1">1 Estrela</option>
                  <option value="2">2 Estrelas</option>
                  <option value="3">3 Estrelas</option>
                  <option value="4">4 Estrelas</option>
                  <option value="5">5 Estrelas</option>
                </select>
              </div>

              {/* Filtro por Localização */}
              <div className="filter-item">
                <label>Localização</label>
                <select className="custom-select">
                  <option value="bairro1">Bairro Verde</option>
                  <option value="bairro2">Bairro Azul</option>
                  <option value="bairro3">Bairro Laranja</option>
                  <option value="bairro4">Bairro Amarelo</option>
                </select>
              </div>

              <button>Filtrar</button>
            </div>
          </div>
        </div>
      )}

      <div className="map-layout">
        <div className="filters-panel">
          <div className="filter-item">
            <label>Tipo de Produto</label>
            <select className="custom-select">
              <option value="verdura">Verdura</option>
              <option value="legume">Legume</option>
              <option value="fruta">Fruta</option>
              <option value="hortalica">Hortaliça</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Tipo de Cultivo</label>
            <select className="custom-select">
              <option value="tradicional">Tradicional</option>
              <option value="organico">Orgânico</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Proximidade</label>
            <input
              type="range"
              className="range-slider"
              min="0"
              max="50"
              step="1"
              defaultValue="10"
            />
            <input
              type="number"
              min="0"
              max="50"
              defaultValue="10"
              className="range-slider"
            />
          </div>

          {/* Filtro por Faixa de Preço */}
          <div className="filter-item">
            <label>Faixa de Preço</label>
            <input
              type="range"
              className="range-slider"
              min="0"
              max="500"
              step="1"
              defaultValue="100"
            />
            <input
              type="number"
              min="0"
              max="500"
              defaultValue="100"
              className="range-slider"
            />
          </div>

          {/* Filtro por Avaliação */}
          <div className="filter-item">
            <label>Avaliação (Estrelas)</label>
            <select className="custom-select">
              <option value="1">1 Estrela</option>
              <option value="2">2 Estrelas</option>
              <option value="3">3 Estrelas</option>
              <option value="4">4 Estrelas</option>
              <option value="5">5 Estrelas</option>
            </select>
          </div>

          {/* Filtro por Localização */}
          <div className="filter-item">
            <label>Localização</label>
            <select className="custom-select">
              <option value="bairro1">Bairro Verde</option>
              <option value="bairro2">Bairro Azul</option>
              <option value="bairro3">Bairro Laranja</option>
              <option value="bairro4">Bairro Amarelo</option>
            </select>
          </div>
        </div>

        <MapContainer center={[-23.55052, -46.633308]} zoom={15} className="map-container">
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a> | Dados &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {comercios.map((comercio, index) => (
            <HoverMarker key={index} comercio={comercio} />
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

const HoverMarker = ({ comercio }) => {
  const markerRef = React.useRef();
  const navigate = useNavigate();

  const handleMouseOver = () => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  };

  const handleMouseOut = () => {
    if (markerRef.current) {
      markerRef.current.closePopup();
    }
  };

  const handleMarkerClick = () => {
    window.open(comercio.link, '_blank');
  };

  const customIcon = new L.Icon({
    iconUrl: comercio.imagem,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <Marker
      position={comercio.posicao}
      ref={markerRef}
      icon={customIcon}
      eventHandlers={{
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
        click: handleMarkerClick,
      }}
    >
      <Popup>
        <img src={comercio.imagem} alt={comercio.nome} width="180" /><br />
        <strong>{comercio.nome}</strong><br />
        {comercio.descricao}<br />
        {comercio.endereco}
      </Popup>
    </Marker>
  );
};

export default Maps;
