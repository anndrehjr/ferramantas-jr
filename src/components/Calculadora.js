"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export function Calculadora() {
  const [display, setDisplay] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleClick = (value) => {
    if (/^\d|\.$/.test(value)) {
      setDisplay((prev) => prev + value);
    } else if (value === "CE") {
      setDisplay("");
      setPreviousValue("");
      setOperator("");
    } else if ("+-×÷%".includes(value)) {
      if (display !== "") {
        if (previousValue !== "") {
          calculate();
        }
        setPreviousValue(display);
        setDisplay("");
        setOperator(value);
      }
    } else if (value === "=") {
      calculate();
    }
  };

  const calculate = () => {
    if (previousValue !== "" && display !== "") {
      const prev = parseFloat(previousValue);
      const curr = parseFloat(display);
      let result = 0;

      switch (operator) {
        case "+":
          result = prev + curr;
          break;
        case "-":
          result = prev - curr;
          break;
        case "×":
          result = prev * curr;
          break;
        case "÷":
          result = curr !== 0 ? prev / curr : "Erro";
          break;
        case "%":
          result = prev % curr;
          break;
        default:
          return;
      }

      setDisplay(result.toString());
      setPreviousValue("");
      setOperator("");
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key;
    if (/^\d$|\.|\+|\-|\*|\//.test(key)) {
      handleClick(key === "*" ? "×" : key === "/" ? "÷" : key);
    } else if (key === "Enter") {
      handleClick("=");
    } else if (key === "Escape") {
      handleClick("CE");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [display, previousValue, operator]);

  return (
    <div className="navbar">
      <Navbar />
    <div style={{ maxWidth: "300px", margin: "0 auto", padding: "16px", background: "#333", borderRadius: "8px", color: "#fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
      <input
        type="text"
        value={display}
        readOnly
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "18px",
          textAlign: "right",
          marginBottom: "16px",
          background: "#222",
          border: "1px solid #444",
          borderRadius: "4px",
          color: "#fff"
        }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
        <button onClick={() => handleClick("CE")} style={{ gridColumn: "span 2", background: "#e74c3c", color: "#fff", padding: "10px", borderRadius: "4px" }}>CE</button>
        <button onClick={() => handleClick("%")} style={{ background: "#555", color: "#fff", padding: "10px", borderRadius: "4px" }}>%</button>
        <button onClick={() => handleClick("÷")} style={{ background: "#555", color: "#fff", padding: "10px", borderRadius: "4px" }}>÷</button>
        {["7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              padding: "10px",
              borderRadius: "4px",
              color: "#fff",
              background: btn === "=" ? "#007bff" : "+-×÷".includes(btn) ? "#555" : "#444"
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}
