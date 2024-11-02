import React, { useState } from 'react';
import BaseForm from '../../../components/BaseForm/BaseForm';

const AddNewService = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleFormSubmit = () => {
    console.log('Submitting:', { name, description, deadline }); // Log dos valores do formulário
    // onSubmit({ name, description, deadline }); // Deixe esta linha comentada se não quiser submeter
    setName('');
    setDescription('');
    setDeadline('');
  };

  return (
    <BaseForm onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome do serviço"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Digite a descrição do serviço"
          className="textarea textarea-bordered w-full mt-1"
          rows="4"
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Prazo para realização(dias)</label>
        <input
          type="number"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          placeholder="Digite o prazo em dias"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>
    </BaseForm>
  );
};

export default AddNewService;
