import React, { useState } from 'react';
import BaseForm from '../../components/BaseForm/BaseForm';


  const LoginGoverment = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleFormSubmit = () => {
    onSubmit({ email, senha });
    setEmail('');
    setSenha('');
  };

  return (
    <BaseForm onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
          Senha
        </label>
        <input
          type="senha"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>
    </BaseForm>
  );
};

export default LoginGoverment;
