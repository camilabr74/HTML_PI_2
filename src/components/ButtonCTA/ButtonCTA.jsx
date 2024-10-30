// src/components/Button/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';
//import './Button.css'; // Importando o CSS do botão

function ButtonCTA({ to, children}) {
  return (
    <Link to={to}>
      <button className="btn btn-accent sm:btn-sm md:btn-md lg:btn-md mt-4">
        {children}
      </button>
    </Link>

  );
}

export default ButtonCTA;
