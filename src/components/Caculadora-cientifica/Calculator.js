import React, { useState, useEffect } from 'react';
import './calculadora-cientifica.css';
import Navbar from '../Navbar';  // Verifique se o caminho está correto

function App() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setDisplay('0');
      setPreviousValue(null);
      setOperator(null);
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
        setPreviousValue(null);
        setOperator(null);
      } catch (e) {
        setDisplay('Error');
      }
    } else if (value === '.') {
      if (!display.includes('.')) {
        setDisplay(display + '.');
      }
    } else {
      if (display === '0') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPreviousValue(display);
    setDisplay('0');
  };

  const handleScientificClick = (func) => {
    try {
      const result = eval(`${func}(${display})`);
      setDisplay(result.toString());
    } catch (e) {
      setDisplay('Error');
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      if ('0123456789'.includes(key)) {
        handleButtonClick(key);
      } else if (key === 'Enter' || key === '=') {
        handleButtonClick('=');
      } else if (key === 'Escape' || key === 'Backspace') {
        handleButtonClick('AC');
      } else if (key === '.') {
        handleButtonClick('.');
      } else if ('+-*/'.includes(key)) {
        handleOperatorClick(key);
      } else if (['s', 'c', 't', 'l'].includes(key)) {
        const functions = {
          s: 'Math.sin',
          c: 'Math.cos',
          t: 'Math.tan',
          l: 'Math.log'
        };
        handleScientificClick(functions[key]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [display]);

  return (
    <>
    <div className="navbar-container">
      <Navbar />
    </div>
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="button-row">
        <button className="button special" onClick={() => handleScientificClick('Math.sin')}>sin</button>
        <button className="button special" onClick={() => handleScientificClick('Math.cos')}>cos</button>
        <button className="button special" onClick={() => handleScientificClick('Math.tan')}>tan</button>
        <button className="button special" onClick={() => handleScientificClick('Math.log')}>log</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('7')}>7</button>
        <button className="button" onClick={() => handleButtonClick('8')}>8</button>
        <button className="button" onClick={() => handleButtonClick('9')}>9</button>
        <button className="button operation" onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('4')}>4</button>
        <button className="button" onClick={() => handleButtonClick('5')}>5</button>
        <button className="button" onClick={() => handleButtonClick('6')}>6</button>
        <button className="button operation" onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('1')}>1</button>
        <button className="button" onClick={() => handleButtonClick('2')}>2</button>
        <button className="button" onClick={() => handleButtonClick('3')}>3</button>
        <button className="button operation" onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => handleButtonClick('0')}>0</button>
        <button className="button" onClick={() => handleButtonClick('.')}>.</button>
        <button className="button special" onClick={() => handleButtonClick('AC')}>AC</button>
        <button className="button operation" onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div className="button-row">
        <button className="button special equal" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
    </>
  );
}

export default App;
