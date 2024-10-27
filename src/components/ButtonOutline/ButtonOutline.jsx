// src/components/Button/Button.jsx
import React from 'react';
//import './Button.css'; // Importando o CSS do botão

function Button({ children, onClick }) {
  return (
    <button className="btn btn-outline btn-accent sm:btn-sm md:btn-md lg:btn-lg">
    {children}
    </button>

  );
}

export default Button;
