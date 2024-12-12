import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import '../styles/TelaInicial.css';

function TelaInicial() {
  const navigate = useNavigate();

  const ferramentas = [
    {
      id: 1,
      nome: 'Calculadora',
      descricao: 'Realize cálculos matemáticos',
      rota: '/calculadora',
      icone: '/calculadora.png',
    },
    {
      id: 2,
      nome: 'Conversor de Medidas',
      descricao: 'Converta diferentes unidades de medida',
      rota: '/medidas',
      icone: '/navegacao.png',
    },
    {
      id: 3,
      nome: 'Conversor de Volumes',
      descricao: 'Converta diferentes unidades de volume',
      rota: '/volumes',
      icone: '/volume.png',
    },
  ];

  return (
    <div className="tela-inicial">
      <h1>Ferramentas de Conversão</h1>
      <div className="cards-container">
        {ferramentas.map((ferramenta) => (
          <div
            key={ferramenta.id}
            className="card"
            onClick={() => navigate(ferramenta.rota)}
          >
            <img
              src={ferramenta.icone}
              alt={ferramenta.nome}
              className="card-icon"
            />
            <h2>{ferramenta.nome}</h2>
            <p>{ferramenta.descricao}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default TelaInicial;

