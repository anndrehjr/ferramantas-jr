'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/Calculadora.css';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);

  const calculate = (a, b, op) => {
    a = parseFloat(a);
    b = parseFloat(b);
    if (op === '÷' && b === 0) return 'Erro';
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case 'x': return a * b;
      case '÷': return a / b;
      default: return b;
    }
  };

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else if (!(num === '.' && display.includes('.')) && display.length < 14) {
      setDisplay(display === '0' ? num : display + num);
    }
  };
  
  const truncateDisplay = (value) => {
    return value.length > 14 ? value.slice(0, 14) : value;
  };

  const handleOperation = (op) => {
    const current = parseFloat(display);
    if (firstNumber === null) {
      setFirstNumber(current);
    } else if (operation) {
      const result = calculate(firstNumber, current, operation);
      setFirstNumber(result);
      setDisplay(String(result));
    }
    setNewNumber(true);
    setOperation(op);
  };

  const handleEqual = () => {
    const current = parseFloat(display);
    if (operation && firstNumber !== null) {
      const result = calculate(firstNumber, current, operation);
      setDisplay(String(result));
      setFirstNumber(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleBackspace = () => {
    setDisplay(display.slice(0, -1) || '0');
  };

  const handlePercent = () => {
    setDisplay(String(parseFloat(display) / 100));
    setNewNumber(true);
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    if (!isNaN(key)) {
      handleNumber(key);
    } else if (key === '+') {
      handleOperation('+');
    } else if (key === '-') {
      handleOperation('-');
    } else if (key === '*') {
      handleOperation('x');
    } else if (key === '/') {
      handleOperation('÷');
    } else if (key === 'Enter' || key === '=') {
      handleEqual();
    } else if (key === 'Backspace') {
      handleBackspace();
    } else if (key === 'Escape') {
      handleClear();
    } else if (key === '.') {
      handleNumber('.');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [display, firstNumber, operation, newNumber]);

  const createButton = (label, onClick, className = '') => (
    <button
      onClick={() => onClick(label)}
      className={`calculator-button ${className}`}
    >
      {label}
    </button>
  );

  return (
    <div className="calculator-container">
      {/* Navbar */}
      <Navbar />

      {/* Calculator */}
      <div className="calculator">
        {/* Display */}
        <div className="calculator-display">
          {display}
        </div>

        {/* Buttons container */}
        <div className="calculator-buttons">
          {createButton('C', handleClear, 'clear-button')}
          {createButton('⌫', handleBackspace, 'backspace-button')}
          {createButton('%', handlePercent, 'operator-button')}
          {createButton('÷', () => handleOperation('÷'), 'operator-button')}

          {createButton('7', () => handleNumber('7'), 'number-button')}
          {createButton('8', () => handleNumber('8'), 'number-button')}
          {createButton('9', () => handleNumber('9'), 'number-button')}
          {createButton('x', () => handleOperation('x'), 'operator-button')}

          {createButton('4', () => handleNumber('4'), 'number-button')}
          {createButton('5', () => handleNumber('5'), 'number-button')}
          {createButton('6', () => handleNumber('6'), 'number-button')}
          {createButton('-', () => handleOperation('-'), 'operator-button')}

          {createButton('1', () => handleNumber('1'), 'number-button')}
          {createButton('2', () => handleNumber('2'), 'number-button')}
          {createButton('3', () => handleNumber('3'), 'number-button')}
          {createButton('+', () => handleOperation('+'), 'operator-button')}

          {createButton('±', () => setDisplay(String(-parseFloat(display))), 'number-button')}
          {createButton('0', () => handleNumber('0'), 'number-button')}
          {createButton('.', () => handleNumber('.'), 'number-button')}
          {createButton('=', handleEqual, 'equal-button')}
        </div>
      </div>
    </div>
  );
}
