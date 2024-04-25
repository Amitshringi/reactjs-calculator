import { createContext, useState } from 'react';

// Creating a context for calculator state
export const CalcContext = createContext();

// Calculator provider component
const CalcProvider = ({ children }) => {
    // Initializing state for calculator
    const [calc, setCalc] = useState({
        sign: "", // Current mathematical operation
        num: 0,   // Current number input
        res: 0    // Result of calculation
    });

    // Value to be provided by the context
    const providerValue = {
        calc,     // Calculator state
        setCalc   // Function to update calculator state
    };

    // Providing the context value to its children
    return (
        <CalcContext.Provider value={providerValue}>
            {children}
        </CalcContext.Provider>
    );
};

export default CalcProvider; // Exporting the Calculator provider component
