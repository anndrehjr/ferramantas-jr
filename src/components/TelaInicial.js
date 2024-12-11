import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TelaInicial.css';

function TelaInicial() {
  const navigate = useNavigate();

  const ferramentas = [
    {
      id: 1,
      nome: 'Calculadora',
      descricao: 'Realize cálculos matemáticos',
      rota: '/calculadora',
      icone: '/calculadora.png',  // Caminho atualizado
    },
    {
      id: 2,
      nome: 'Conversor de Medidas',
      descricao: 'Converta diferentes unidades de medida',
      rota: '/medidas',
      icone: '/medidas.png',  // Caminho atualizado
    },
    {
      id: 3,
      nome: 'Conversor de Volumes',
      descricao: 'Converta diferentes unidades de volume',
      rota: '/volumes',
      icone: '/volumes.png',  // Caminho atualizado
    },
    {
      id: 4,
      nome: 'Calculadora Cientificas',
      descricao: 'Converta diferentes unidades de volume',
      rota: '/calculadora-cientifica',
      icone: '/volumes.png',  // Caminho atualizado
    }
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
    </div>
  );
}

export default TelaInicial;
