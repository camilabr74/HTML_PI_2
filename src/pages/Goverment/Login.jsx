import React, { useState } from 'react';
import BaseForm from '../../components/BaseForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginGoverment = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializando o hook de navegação

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://orlok.pythonanywhere.com/api/v1/auth/', {
        email,
        senha,
        permission: 'employee'
      });
  
      if (response.data.status === 'ok') {
        console.log('Usuário autenticado:', response.data);
        const { token } = response.data; // Supondo que o token esteja na resposta
        localStorage.setItem('authToken', token); // Armazena o token no localStorage
        navigate('/HTML_PI_2/home-employee');
      } else {
        setError('Falha na autenticação.'); 
      }
    } catch (error) {
      setError(error.response ? error.response.data.response : 'Erro na conexão com o servidor.');
    } 
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
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

    </BaseForm>
  );
};

export default LoginGoverment;
