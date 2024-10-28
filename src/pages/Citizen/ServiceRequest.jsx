import React, { useState } from 'react';
import BaseForm from '../../components/BaseForm/BaseForm';

const ServiceAdd = ({ onSubmit }) => {
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [area, setArea] = useState('');
  const [cep, setCep] = useState('');
  const [servico, setServico] = useState('');
  const [desc, setDesc] = useState('');
  const [anexo, setAnexo] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFormSubmit = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    const formattedTime = currentDate.toTimeString().split(' ')[0]; // Formato HH:MM:SS

    onSubmit({
      rua,
      bairro,
      numero,
      area,
      cep,
      servico,
      desc,
      anexo,
      date: formattedDate,
      time: formattedTime,
      status: 'em análise',
    });

    // Resetar campos se necessário
    setRua('');
    setBairro('');
    setNumero('');
    setArea('');
    setCep('');
    setServico('');
    setDesc('');
    setAnexo(null);
    setImagePreview(null); // Resetar a prévia da imagem
  };

  const handleanexoChange = (e) => {
    const file = e.target.files[0];
    setAnexo(file);

    // Criar uma URL para a prévia da imagem
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  return (
    <BaseForm onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="rua" className="block text-sm font-medium text-gray-700">Rua</label>
        <input
          type="text"
          id="rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          placeholder="Digite a rua"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="bairro" className="block text-sm font-medium text-gray-700">Bairro</label>
        <input
          type="text"
          id="bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          placeholder="Digite o bairro"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Número</label>
        <input
          type="text"
          id="numero"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Digite o número"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="area" className="block text-sm font-medium text-gray-700">Área</label>
        <select
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="select select-bordered w-full mt-1"
          required
        >
          <option value="">Selecione a área</option>
          <option value="Área 1">Área 1</option>
          <option value="Área 2">Área 2</option>
        </select>
      </div>

      <div>
        <label htmlFor="cep" className="block text-sm font-medium text-gray-700">CEP</label>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="servico" className="block text-sm font-medium text-gray-700">Serviço</label>
        <input
          type="text"
          id="servico"
          value={servico}
          onChange={(e) => setServico(e.target.value)}
          placeholder="Digite o serviço"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Descrição</label>
        <textarea
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Digite a descrição"
          className="textarea textarea-bordered w-full mt-1"
          rows="4"
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="anexo" className="block text-sm font-medium text-gray-700">Anexo</label>
        <input
          type="file"
          id="anexo"
          onChange={handleanexoChange}
          className="file-input file-input-bordered w-full mt-1"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-2 w-full h-auto rounded-md"
          />
        )}
      </div>
    </BaseForm>
  );
};

export default ServiceAdd;
