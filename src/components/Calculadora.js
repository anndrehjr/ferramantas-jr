import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer.js";
import "../styles/Calculador.css";

const Calculadora = () => {
  const [input, setInput] = useState("");

  // Handle button click
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput((prev) => {
          const result = eval(prev).toString(); // Use eval cautiously
          return result.length > 12 ? result.slice(0, 12) : result;
        });
      } catch {
        setInput("Error");
      }
    } else if (["sin", "cos", "tan", "log"].includes(value)) {
      try {
        const mathFunc = {
          sin: Math.sin,
          cos: Math.cos,
          tan: Math.tan,
          log: Math.log,
        };
        setInput((prev) => {
          const result = mathFunc[value](parseFloat(prev)).toString();
          return result.length > 12 ? result.slice(0, 12) : result;
        });
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => {
        const newInput = prev + value;
        return newInput.length > 12 ? prev : newInput;
      });
    }
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (event) => {
      const allowedKeys = /[0-9+\-*/.=]|Backspace|Enter/;
      if (allowedKeys.test(event.key)) {
        if (event.key === "Enter") {
          handleClick("=");
        } else if (event.key === "Backspace") {
          setInput((prev) => prev.slice(0, -1));
        } else {
          handleClick(event.key);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="calculator-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="calculator">
        <div className="calculator-display">{input || "0"}</div>
        <div className="calculator-buttons">
          {[
            ["7", "8", "9", "/"],
            ["4", "5", "6", "*"],
            ["1", "2", "3", "-"],
            ["C", "0", "=", "+"],
            ["sin", "cos", "tan", "log"]
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="calculator-row">
              {row.map((btn) => (
                <button
                  key={btn}
                  className="calculator-button"
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Calculadora;

