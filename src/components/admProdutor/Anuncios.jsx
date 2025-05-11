import { useState } from 'react'; 
import { NumericFormat } from 'react-number-format'; // Corrigir importação

import './../../styles/admProdutor/Anuncios.css';
import ConfirmacaoAlteracao from '../../components/popups/ConfirmacaoAlteracao'; // Import do popup

const Anuncios = () => {
  const [produto, setProduto] = useState({
    nome: '',
    categoria: '',
    cultivo: '',
    preco: '',
    quantidade: '',
    volume: '',
    imagem: null
  });

  const [showPopup, setShowPopup] = useState(false); // Estado do popup

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Se for o campo quantidade, garantir que o valor não seja negativo
    if (name === 'quantidade' && value < 0) {
      return;
    }

    setProduto({ ...produto, [name]: value });
  };

  const handleImagem = (e) => {
    setProduto({ ...produto, imagem: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(produto);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="adicionar-produto-container">
      {showPopup && <ConfirmacaoAlteracao mensagem="Produto anunciado com sucesso!" />}

      <h1>Anunciar Produto</h1>
      <div className='form-conteiner'>
        <form onSubmit={handleSubmit} className="form-produto">
          <div className='div-externa'>
            <div className="imagem-preview">
              {produto.imagem ? (
                <img
                  src={URL.createObjectURL(produto.imagem)}
                  alt="Pré-visualização"
                />
              ) : (
                <div className="imagem-placeholder">Pré-visualização da Imagem</div>
              )}
              <input className='input-image' type="file" accept="image/*" onChange={handleImagem} />
            </div>

            <div className="form-campos">
              <div className='campos-direita'>
                <label>
                  Nome do Produto:
                  <input type="text" name="nome" value={produto.nome} onChange={handleChange} required />
                </label>

                <label>
                  Categoria:
                  <select name="categoria" value={produto.categoria} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option value="Hortaliças">Hortaliças</option>
                    <option value="Vegetais">Vegetais</option>
                    <option value="Frutas">Frutas</option>
                    <option value="Legumes">Legumes</option>
                  </select>
                </label>

                <label>
                  Sistema de Cultivo:
                  <select name="cultivo" value={produto.cultivo} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option value="Orgânico">Orgânico</option>
                    <option value="Convencional">Convencional</option>
                  </select>
                </label>
              </div>

              <div className='campos-esquerda'>
                <label>
                  Preço (R$):
                  <NumericFormat
                    name="preco"
                    value={produto.preco}
                    onValueChange={(values) => {
                      const { value } = values;
                      setProduto({ ...produto, preco: value });
                    }}
                    thousandSeparator="."
                    decimalSeparator=","
                    decimalScale={2}
                    fixedDecimalScale
                    allowNegative={false}
                    className="input"
                    placeholder='00.00'
                    required
                  />
                </label>

                <label>
                  Quantidade:
                  <input 
                    type="number" 
                    name="quantidade" 
                    value={produto.quantidade} 
                    onChange={handleChange} 
                    min="0"  // Adicionando a propriedade min para garantir que o valor não seja negativo
                    required 
                  />
                </label>

                <label>
                  Volume:
                  <select name="volume" value={produto.volume} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option value="Unidade">Unidade</option>
                    <option value="Kg">Kg</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <button type="submit">Publicar Anúncio</button>
        </form>
      </div>
    </div>
  );
}

export default Anuncios;
