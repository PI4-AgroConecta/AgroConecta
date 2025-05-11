import '../../styles/admProdutor/Reservas.css';

const Reservas = () => {
  return (
    <div className="reservas">
      <h1>Reservas de Produtos</h1>

      <section className="reservas-dia">
        <h2>Reservas do Dia</h2>
        <ul>
          <li>Produto A - Usuário: João - 10:30</li>
          <li>Produto B - Usuário: Maria - 11:00</li>
        </ul>
      </section>

      <section className="historico-reservas">
        <h2>Histórico do Mês</h2>
        <ul>
          <li>02/05 - Produto C - Usuário: Ana</li>
          <li>07/05 - Produto D - Usuário: Carlos</li>
          <li>09/05 - Produto A - Usuário: Bruna</li>
        </ul>
      </section>
    </div>
  );
}

export default Reservas;