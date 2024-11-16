import React, { useState } from 'react';
import BaseForm from '../../components/BaseForm/BaseForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ButtonOutline from '../../components/ButtonOutline/ButtonOutline';
import brasao from '/src/assets/brasao.webp';


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
    <div>
      <div className="flex justify-center items-center">
        <img src={brasao} alt="Logo" className="mx-auto w-48" />
      </div>

      <BaseForm onSubmit={handleFormSubmit}>
        <div>

          <span className="text-xl font-bold mb-8 flex justify-center items-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
            ÁREA DA PREFEITURA
          </span>

          <label htmlFor="email" className="block text-sm font-medium form-label">
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
          <label htmlFor="senha" className="block text-sm font-medium form-label">
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

      <ButtonOutline to="/HTML_PI_2/login" className="w-1/2 mt-8 mb-12">
        Login do cidadão vicentino
      </ButtonOutline>

    </div>
  );
};

export default LoginGoverment;
