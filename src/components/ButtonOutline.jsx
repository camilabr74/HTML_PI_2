// src/components/Button/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ButtonOutline({ children, onClick, to, className }) {
  return (
    <div className="flex items-center justify-center">
      {to ? (
        <Link 
          to={to} 
          className={`btn btn-outline btn-accent sm:btn-sm md:btn-md lg:btn-lg ${className}`}
        >
          {children}
        </Link>
      ) : (
        <button 
          onClick={onClick} 
          className={`btn btn-outline btn-accent sm:btn-sm md:btn-md lg:btn-lg ${className}`}
        >
          {children}
        </button>
      )}
    </div>
  );
}

export default ButtonOutline;
