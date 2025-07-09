import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css"; // nếu bạn muốn style

const buttons = [
  "AC",
  "%",
  "/",
  "*",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "=",
  "0",
];

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button key={index} value={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
