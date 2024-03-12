import React from 'react';
import  '../border.css';

const Border = ({ children }) => {
  return (
    <div className="border-container">
      {children}
    </div>
  );
};

export default Border;