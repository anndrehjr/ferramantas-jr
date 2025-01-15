import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/Calculador.css";
import * as math from 'mathjs';

const Calculadora = () => {
  const [input, setInput] = useState("");

  // Handle button click
  const handleClick = (value) => {
    if (value === "C") {
      setInput(""); // Clear the input
    } else if (value === "=") {
      try {
        setInput((prev) => {
          const result = math.evaluate(prev).toString();
          return result.length > 12 ? result.slice(0, 12) : result;
        });
      } catch {
        setInput("Error");
      }
    } else if (["sin", "cos", "tan", "log"].includes(value)) {
      try {
        setInput((prev) => {
          const result = math.evaluate(`${value}(${prev})`).toString();
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
      const allowedKeys = /[0-9+\-*/.=()]|Backspace|Enter/;
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
    <div className="page-container">
      <Navbar />
      <div className="content-container">
        <div className="calculator-container">
          <div className="calculator">
            <div className="calculator-display">{input || "0"}</div>
            <div className="calculator-buttons">
              {[
                ["(", ")", "DEL", "C"],
                ["7", "8", "9", "/"],
                ["4", "5", "6", "*"],
                ["1", "2", "3", "-"],
                ["0", ".", "=", "+"],
                ["sin", "cos", "tan", "log"]
              ].map((row, rowIndex) => (
                <div key={rowIndex} className="calculator-row">
                  {row.map((btn) => (
                    <button
                      key={btn}
                      className={`calculator-button ${["/", "*", "-", "+", "="].includes(btn) ? "operation" : ["C", "DEL", "(", ")"].includes(btn) ? "special" : ["sin", "cos", "tan", "log"].includes(btn) ? "function" : "number"}`}
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
      </div>
    </div>
  );
};

export default Calculadora;

