import React, { useState } from 'react';
import BaseForm from '../../components/BaseForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ButtonOutline from '../../components/ButtonOutline';

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [permission, setPermission] = useState('citizen');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializando o hook de navegação

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://orlok.pythonanywhere.com/api/v1/auth/', {
        email,
        senha,
        permission: 'citizen'
      });

      if (response.data.status === 'ok') {

        const { token } = response.data; // Supondo que o token esteja na resposta
        localStorage.setItem('authToken', token);
        console.log('Usuário autenticado:', response.data);
        navigate('/HTML_PI_2/home');
      } else {
        setError('Falha na autenticação.');
      }
    } catch (error) {
      setError(error.response ? error.response.data.response : 'Erro na conexão com o servidor.');
    }
  };

  return (

    <div>
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

      <Link className="link link-accent px-12 pt" to="/HTML_PI_2/sign-up">Não tem conta? Cadastre-se!</Link>

      <ButtonOutline to="/HTML_PI_2/login-goverment" className="w-1/4 mt-12">
        @prefeiturasv
      </ButtonOutline>


    </div>
  );
};

export default Login;
