// src/components/Button/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ButtonCTA({ to, type = 'button', children, className = '', onClick }) {
  if (to) {
    // Se a propriedade "to" for passada, use o Link
    return (
      <Link to={to}>
        <button
          className={`btn btn-accent ${className}`}
          type="button"
        >
          {children}
        </button>
      </Link>
    );
  }

  // Caso contrário, é um botão normal que pode ser usado para submit
  return (
    <button
      className={`btn btn-accent ${className}`}
      type={type}
      onClick={onClick} // onClick no botão normal
    >
      {children}
    </button>
  );
}

export default ButtonCTA;
