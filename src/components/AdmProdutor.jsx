import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <--- ADICIONE ESTA LINHA
import "./../styles/AdmProdutor.css";
import Perfil from "./admProdutor/PerfilProdutor";
import Dashboard from "./admProdutor/Dashboard";
import Reservas from "./admProdutor/Reservas";
import Horarios from "./admProdutor/Horarios";
import Anuncios from "./admProdutor/Anuncios";
// import Login from "./LoginAgricultor"; // Login não está sendo usado aqui, pode remover se não for necessário

const AdmProdutor = () => {
  const [pagina, setPagina] = useState("Perfil");
  const navigate = useNavigate(); // <--- ADICIONE ESTA LINHA PARA INICIALIZAR 'navigate'

  const irParaPrincipal = () => {
    navigate('/'); // Agora 'navigate' estará definida!
  };

  return (
    <div className="admin-layout">
      <header className="main-header-verde">
        <img src="/img/LogoClara.png" alt="Logo" className="logo-menor" />
      </header>

      <div className="app">
        <aside className="sidebar">
          <h2 className="logo">Admin</h2>
          <nav>
            <ul>
              <li onClick={() => setPagina("Perfil")}>Perfil</li>
              <li onClick={() => setPagina("Dashboard")}>Dashboard</li>
              <li onClick={() => setPagina("Reservas")}>Reservas</li>
              <li onClick={() => setPagina("Horarios")}>Horários</li>
              <li className="anunciar-produto" onClick={() => setPagina("Anuncios")}>Anunciar Produto</li>
              {/* O onClick={irParaPrincipal} já está correto, desde que 'navigate' esteja definido */}
              <li className="logout" onClick={irParaPrincipal}>Logout</li>
            </ul>
          </nav>
        </aside>
  
        <main className="main-content">
          {pagina === "Perfil" && <Perfil />}
          {pagina === "Dashboard" && <Dashboard />}
          {pagina === "Reservas" && <Reservas />}
          {pagina === "Horarios" && <Horarios />}
          {pagina === "Anuncios" && <Anuncios />}
        </main>
      </div>
    </div>
  );
  
}

export default AdmProdutor;
