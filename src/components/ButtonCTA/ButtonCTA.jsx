// src/components/Button/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';
//import './Button.css'; // Importando o CSS do botão

function ButtonCTA({ to, children, onClick }) {
  return (
    <Link to={to}>
      <button className="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg">
        {children}
      </button>
    </Link>

  );
}

export default ButtonCTA;
