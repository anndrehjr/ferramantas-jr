import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaInicial from './components/TelaInicial';
import Calculadora from './components/Calculadora';
import ConversorMedidas from './components/ConversorMedidas';
import ConversorVolumes from './components/ConversorVolumes';
import Calculator from './components/Caculadora-cientifica/Calculator';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/calculadora-cientifica" element={<Calculator />} />
          <Route path="/" element={<TelaInicial />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/medidas" element={<ConversorMedidas />} />
          <Route path="/volumes" element={<ConversorVolumes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
