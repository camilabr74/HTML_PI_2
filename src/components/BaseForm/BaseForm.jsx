import React from 'react';
import ButtonCTA from '../ButtonCTA/ButtonCTA';

const BaseForm = ({ onSubmit, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e); // Chama a função de envio definida nos componentes específicos
  };

  return (
    <form className="space-y-4 p-12 pb-4" onSubmit={handleSubmit}>
      {children}
      <div className="flex justify-center">
        <ButtonCTA type="submit" className="btn btn-primary px-12 text-lg">
          Enviar
        </ButtonCTA>
      </div>
    </form>
  );
};

export default BaseForm;
