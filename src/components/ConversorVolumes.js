import React, { useState } from 'react';
import Navbar from './Navbar'; // Importando o componente Navbar
import '../styles/ConversorVolumes.css'; // Estilos específicos para o Conversor de Volumes

function ConversorVolumes() {
  const [valor, setValor] = useState('');
  const [de, setDe] = useState('litros');
  const [para, setPara] = useState('mililitros');
  const [resultado, setResultado] = useState('');

  const unidades = {
    litros: 1,
    mililitros: 1000,
    metrosCubicos: 0.001,
    galoes: 0.264172,
  };

  const converter = () => {
    const valorNumerico = parseFloat(valor);
    if (isNaN(valorNumerico)) {
      setResultado('Por favor, insira um número válido');
      return;
    }
    const resultadoConversao = (valorNumerico / unidades[de]) * unidades[para];
    setResultado(`${valorNumerico} ${de} = ${resultadoConversao.toFixed(4)} ${para}`);
  };

  return (
    <div  className="navbar-container">
      <Navbar /> {/* Aqui você insere a Navbar */}
      <div className="conversor-volumes">
      
      <h2>Conversor de Volumes</h2>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Insira o valor"
      />
      <select value={de} onChange={(e) => setDe(e.target.value)}>
        <option value="litros">Litros</option>
        <option value="mililitros">Mililitros</option>
        <option value="metrosCubicos">Metros Cúbicos</option>
        <option value="galoes">Galões</option>
      </select>
      <select value={para} onChange={(e) => setPara(e.target.value)}>
        <option value="litros">Litros</option>
        <option value="mililitros">Mililitros</option>
        <option value="metrosCubicos">Metros Cúbicos</option>
        <option value="galoes">Galões</option>
      </select>
      <button onClick={converter}>Converter</button>
      <p>{resultado}</p>
    </div>
    </div>
  );
}

export default ConversorVolumes;
