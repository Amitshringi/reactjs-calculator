import React from 'react';

// Wrapper component
const Wrapper = ({ children }) => {
  return (
    <div className='wrapper'>{children}</div> // Rendering children within a div with the 'wrapper' class
  );
};

export default Wrapper; // Exporting the Wrapper component
