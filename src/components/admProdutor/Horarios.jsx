import Calendar from 'react-calendar';
import './../../styles/admProdutor/Calendario.css';
import './../../styles/admProdutor/Horarios.css';
import { useState } from 'react';

export default function Horarios() {
  const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  const horas = Array.from({ length: 24 }, (_, i) => {
    const inicio = `${i}:00`;
    const fim = `${(i + 1) % 24}:00`;
    return `${inicio} - ${fim}`;
  });

  const [modoMensal, setModoMensal] = useState(false);
  const [selecionados, setSelecionados] = useState({});
  const [dataSelecionada, setDataSelecionada] = useState(new Date());

  const toggleHorario = (diaOuData, hora) => {
    const chave = `${diaOuData}-${hora}`;
    setSelecionados((prev) => ({
      ...prev,
      [chave]: !prev[chave]
    }));
  };

  return (
    <div className="horarios">

      <div className='horarios-title'>
        <h1>{modoMensal ? 'Horários de Retirada do Mês' : 'Horários de Retirada da Semana'}</h1>

        <button onClick={() => setModoMensal(!modoMensal)}>
          {modoMensal ? 'Ver Horários da Semana' : 'Ver Calendário Mensal'}
        </button>
      </div>

      {!modoMensal ? (
        <div className="dias-container">
          {dias.map((dia) => (
            <div key={dia} className="dia-bloco">
              <h3>{dia}</h3>
              <div className="horas-container">
                {horas.map((hora) => {
                  const chave = `${dia}-${hora}`;
                  return (
                    <div
                      key={hora}
                      className={`horario ${selecionados[chave] ? 'selecionado' : ''}`}
                      onClick={() => toggleHorario(dia, hora)}
                    >
                      {hora}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="calendario-container">
          <div className='calendario'>
            <Calendar onClickDay={setDataSelecionada} value={dataSelecionada} />
          </div>
          <div className='horarios-calendario'>
          <h3>Horários para {dataSelecionada.toLocaleDateString()}</h3>
          <div className="horas-calendario">
            {horas.map((hora) => {
              const chave = `${dataSelecionada.toDateString()}-${hora}`;
              return (
                <div
                  key={hora}
                  className={`horario ${selecionados[chave] ? 'selecionado' : ''}`}
                  onClick={() => toggleHorario(dataSelecionada.toDateString(), hora)}
                >
                  {hora}
                </div>
              );
            })}
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
