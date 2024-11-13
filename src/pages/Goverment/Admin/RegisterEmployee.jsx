import React, { useState } from 'react';
import axios from 'axios';
import BaseForm from '../../../components/BaseForm/BaseForm';

const EmployeeRegisterForm = () => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('authToken'); 
    if (!token) {
      setToastMessage('Acesso negado. Faça login como administrador.');
      setToastType('alert-info');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500); // Esconde o toast após 2.5 segundos
      return;
    }

    try {
      const response = await axios.post(
        'https://orlok.pythonanywhere.com/api/v1/employee/',
        {
          nome,
          cargo,
          email,
          senha,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      console.log('Funcionário cadastrado com sucesso', response.data);
      
      // Limpa os campos do formulário após o envio
      setNome('');
      setCargo('');
      setEmail('');
      setSenha('');
      setError(null);

      setToastMessage('Funcionário cadastrado com sucesso!');
      setToastType('alert-success');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500); // Esconde o toast após 2.5 segundos

    } catch (error) {
      setToastMessage(error.response ? error.response.data.response : 'Erro na conexão com o servidor.');
      setToastType('alert-error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500); // Esconde o toast após 2.5 segundos
    }
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
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite a senha"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      {showToast && (
        <div className="toast toast-center toast-middle">
          <div className={`alert ${toastType}`}>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}

    </BaseForm>
  );
};

export default EmployeeRegisterForm;
