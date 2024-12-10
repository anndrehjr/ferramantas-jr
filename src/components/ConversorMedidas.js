import React, { useState } from 'react';
import '../styles/ConversorMedidas.css';
import Navbar from './Navbar';  

function ConversorMedidas() {
  const [valor, setValor] = useState('');
  const [de, setDe] = useState('metros');
  const [para, setPara] = useState('quilometros');
  const [resultado, setResultado] = useState('');

  const unidades = {
    metros: 1,
    quilometros: 0.001,
    centimetros: 100,
    milimetros: 1000
  };

  const converter = () => {
    const valorNumerico = parseFloat(valor);
    if (isNaN(valorNumerico)) {
      setResultado('Por favor, insira um número válido');
      return;
    }
    const resultadoConversao = (valorNumerico / unidades[de]) * unidades[para];
    setResultado(`${valorNumerico} ${de} = ${resultadoConversao} ${para}`);
  };

  return (

    <div className="navbar">
      <Navbar />
    <div className="conversor-medidas">
      <h2>Conversor de Medidas</h2>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Insira o valor"
      />
      <select value={de} onChange={(e) => setDe(e.target.value)}>
        <option value="metros">Metros</option>
        <option value="quilometros">Quilômetros</option>
        <option value="centimetros">Centímetros</option>
        <option value="milimetros">Milímetros</option>
      </select>
      <select value={para} onChange={(e) => setPara(e.target.value)}>
        <option value="metros">Metros</option>
        <option value="quilometros">Quilômetros</option>
        <option value="centimetros">Centímetros</option>
        <option value="milimetros">Milímetros</option>
      </select>
      <button onClick={converter}>Converter</button>
      <p>{resultado}</p>
    </div>
    </div>
  );
}

export default ConversorMedidas;

