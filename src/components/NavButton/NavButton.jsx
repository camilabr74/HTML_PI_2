import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // ou use emojis se preferir

const NavButton = ({ direction, onClick }) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 
        ${direction === 'left' ? 'left-2' : 'right-2'} 
        bg-white/20 hover:bg-white/30 
        text-white backdrop-blur p-2 rounded-full transition-all`}
    >
      <Icon size={32} />
    </button>
  );
};

export default NavButton;
    