import React, { useState } from 'react';
import BaseForm from '../../../components/BaseForm/BaseForm';
import axios from 'axios';

const AddNewService = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [desc, setDesc] = useState('');
  const [prazo, setPrazo] = useState('');
  const [error, setError] = useState('');
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
        'https://orlok.pythonanywhere.com/api/v1/service/',
        {
          nome,
          desc,
          prazo
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
          },
        }
      );
      // Mensagem de sucesso
      setToastMessage('Serviço cadastrado com sucesso!');
      setToastType('alert-success');
      setShowToast(true);

      // Limpar campos após o sucesso
      setNome('');
      setDesc('');
      setPrazo('');

      // Esconde o toast após 2.5 segundos
      setTimeout(() => setShowToast(false), 2500);
    } catch (error) {
      setToastMessage(error.response ? error.response.data.response : 'Erro na conexão com o servidor.');
      setToastType('alert-error');
      setShowToast(true);

      // Esconde o toast após 2.5 segundos
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  return (
    <BaseForm onSubmit={handleFormSubmit}>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome do serviço"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
        <textarea
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Digite a descrição do serviço"
          className="textarea textarea-bordered w-full mt-1"
          rows="4"
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Prazo para realização (dias)</label>
        <input
          type="number"
          id="prazo"
          value={prazo}
          onChange={(e) => setPrazo(e.target.value)}
          placeholder="Digite o prazo em dias"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {showToast && (
        <div className="toast toast-center toast-middle">
          <div className={`alert ${toastType}`}>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

    </BaseForm>
  );
};

export default AddNewService;
