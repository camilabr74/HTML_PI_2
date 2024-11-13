import React from 'react';
import ButtonCTA from './ButtonCTA';

const BaseForm = ({ onSubmit, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e); // Chama a função de envio definida nos componentes específicos
  };

  return (
    <form className="space-y-4 p-12" onSubmit={handleSubmit}>
      {children}
      <ButtonCTA type="submit" className="btn btn-primary">
        Enviar
      </ButtonCTA>
    </form>
  );
};

export default BaseForm;
