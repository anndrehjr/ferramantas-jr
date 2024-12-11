import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Navbar.css';
import feather from 'feather-icons';

function Navbar() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <header>
      <nav className="navbar" aria-label="Navegação principal">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i data-feather="home" aria-hidden="true"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calculadora" className="nav-link">
              <i data-feather="box" aria-hidden="true"></i>
              <span>Calculadora</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/medidas" className="nav-link">
              <i data-feather="box" aria-hidden="true"></i>
              <span>Conversor de Medidas</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/volumes" className="nav-link">
              <i data-feather="box" aria-hidden="true"></i>
              <span>Conversor de Volumes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

