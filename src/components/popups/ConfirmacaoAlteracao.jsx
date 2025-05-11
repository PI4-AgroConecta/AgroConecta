import React from 'react';
import '../../styles/popups.css/ConfirmacaoAlteracao.css';

const ConfirmacaoAlteracao = ({ mensagem }) => {
  return (
    <div className="popup-confirmacao">
      {mensagem}
    </div>
  );
};

export default ConfirmacaoAlteracao;
