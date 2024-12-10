import React from 'react';
import '../styles/Navbar.css'; // Importando o arquivo de estilos para a Navbar
import { Link } from 'react-router-dom'; // Usando React Router para navegação

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Tela Inicial</Link>
        </li>
        <li>
          <Link to="/calculadora">Calculadora</Link>
        </li>
        <li>
          <Link to="/medidas">Conversor de Medidas</Link>
        </li>
        <li>
          <Link to="/volumes">Conversor de Volumes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
