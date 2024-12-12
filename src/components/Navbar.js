import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="navbar" aria-label="Navegação principal">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              {/* Substituindo o ícone por uma imagem */}
              <img src="/home.png" alt="Home" className="nav-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calculadora" className="nav-link">
              {/* Substituindo o ícone por uma imagem */}
              <img src="/calculadora.png" alt="Calculadora" className="nav-icon" />
              <span>Calculadora</span>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/medidas" className="nav-link">
              {/* Substituindo o ícone por uma imagem */}
              <img src="/navegacao.png" alt="Conversor de Medidas" className="nav-icon" />
              <span>Conversor de Medidas</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/volumes" className="nav-link">
              {/* Substituindo o ícone por uma imagem */}
              <img src="/volume.png" alt="Conversor de Volumes" className="nav-icon" />
              <span>Conversor de Volumes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
