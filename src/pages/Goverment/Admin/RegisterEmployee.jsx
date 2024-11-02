import React, { useState } from 'react';
import BaseForm from '../../../components/BaseForm/BaseForm';



const EmployeeRegisterForm = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleFormSubmit = () => {
    onSubmit({ nome, cargo, email, senha });
    setNome('');
    setCargo('');
    setEmail('');
    setSenha('');
  };

  return (
    <BaseForm onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="cargo" className="block text-sm font-medium text-gray-700">Cargo</label>
        <input
          type="text"
          id="cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          placeholder="Digite o cargo do funcionário"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o e-mail"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
        <input
          type="senha"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite a senha"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>
    </BaseForm>
  );
};

export default EmployeeRegisterForm;
