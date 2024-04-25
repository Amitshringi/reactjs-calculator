import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcContext'; // Importing the CalcContext for accessing calculator state

// Screen component displays the current number or result
const Screen = () => {
    const { calc } = useContext(CalcContext); // Using context to access calculator state

    return (
        <div className='screen' max={70} mode='single'> {/* Textfit component to fit text within screen */}
            {calc.num ? calc.num : calc.res} {/* Displaying current number or result */}
        </div>
    );
};

export default Screen; // Exporting the Screen component
