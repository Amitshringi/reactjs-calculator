import React from 'react';

// ButtonBox component
const ButtonBox = ({ children }) => {
  return (
    <div className='buttonBox'>{children}</div> // Rendering children within a div with the 'buttonBox' class
  );
};

export default ButtonBox; // Exporting the ButtonBox component
