import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

// Function to get style name based on button value
const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[btn];
};

// Button component
const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext); // Using context to access calculator state

  // Function to handle comma click
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  // Function to handle reset click
  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  // Function to handle number click
  const handleClickButton = () => {
    const numberString = value.toString();
    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }
    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  // Function to handle operation click
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // Function to handle equals click
  const equalsCick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  // Function to handle percent click
  const percentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
    });
  };

  // Function to handle invert click
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  // Function to handle button click
  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalsCick,
      "%": percentClick,
      "+/-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button> // Button element with onClick handler and dynamic class name
  );
};

export default Button; // Exporting the Button component
