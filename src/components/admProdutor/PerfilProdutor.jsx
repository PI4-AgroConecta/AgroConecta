import '../../styles/admProdutor/PerfilProdutor.css';
import ConfirmacaoAlteracao from '../../components/popups/ConfirmacaoAlteracao';

import { useState } from "react";

import capaImg from './../../images/hortaDonaClaraCapa.png';
import perfilImg from './../../images/hortaDonaClara.png';
import imgLocal1 from './../../images/hortaDonaClaraLocal.png';
import imgLocal2 from './../../images/hortaDonaClaraLocal2.png';
import imgLocal3 from './../../images/hortaDonaClaraLocal3.png';
import imgLocal4 from './../../images/hortaDonaClaraLocal4.png';

const PerfilProdutor = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="perfil-container">
      {showPopup && <ConfirmacaoAlteracao mensagem="Alterações salvas com sucesso!" />}
      <div className="capa">
        <img src={capaImg} alt="Capa da Fazenda" className="capa-img" />
      </div>

      <div className="perfil-conteudo">
        <img src={perfilImg} alt="Foto da Fazenda" className="foto-perfil" />

        <div className="perfil-colunas">
          <form className="formulario-perfil" onSubmit={handleSubmit}>
            <h2>Informações do Estabelecimento</h2>

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

            <button type="submit">Salvar Alterações</button>
          </form>

          <div className="galeria-fotos">
            <div className="fotos-grid">
              <img className="foto-item-local" src={imgLocal1} alt="" />
              <img className="foto-item-local" src={imgLocal2} alt="" />
              <img className="foto-item-local" src={imgLocal3} alt="" />
              <img className="foto-item-local" src={imgLocal4} alt="" />
              <div className="foto-item">+</div>
              {/* Pode incluir aqui previews reais depois */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PerfilProdutor;
