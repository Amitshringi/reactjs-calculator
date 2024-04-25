import React from "react";
import Wrapper from "./components/Wrapper"; // Importing the Wrapper component
import Screen from "./components/Screen"; // Importing the Screen component
import ButtonBox from "./components/ButtonBox"; // Importing the ButtonBox component
import Button from "./components/Button"; // Importing the Button component
import CalcProvider from "./context/CalcContext"; // Importing the CalcProvider component

// Array containing values for buttons on the calculator
const btnValues = [
  ["C", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>   {/* Wrapping the entire application with CalcProvider to provide calculator context */}
      <h1 className="heading"> CALCULATOR</h1>  {/* Heading for the calculator */}
      <Wrapper> {/* Wrapper component for layout */} 
        <Screen />{/* Display component for the calculator */}
        <ButtonBox> {/* Container for calculator buttons */}
          {btnValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
