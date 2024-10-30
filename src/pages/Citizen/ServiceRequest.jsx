import React, { useState } from 'react';
import BaseForm from '../../components/BaseForm/BaseForm';

const ServiceAdd = () => {
//const ServiceAdd = ({ onSubmit }) => {

  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [area, setArea] = useState('');
  const [cep, setCep] = useState('');
  const [servico, setServico] = useState('');
  const [desc, setDesc] = useState('');
  const [protocolo, setProtocolo] = useState('');
  const [anexo, setAnexo] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFormSubmit = () => {
    // Processa os dados do formulário conforme necessário
    console.log({
//   onSubmit({
      rua,
      bairro,
      numero,
      area,
      cep,
      servico,
      desc,
      protocolo,
      anexo,
    });

    // Resetar campos se necessário
    setRua('');
    setBairro('');
    setNumero('');
    setArea('');
    setCep('');
    setServico('');
    setDesc('');
    setProtocolo('');
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
        <label htmlFor="protocolo" className="block text-sm font-medium text-gray-700">Protocolo</label>
        <input
          type="text"
          id="protocolo"
          value={protocolo}
          onChange={(e) => setProtocolo(e.target.value)}
          placeholder="Digite o protocolo"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Área</label>
        <div className="mt-1 space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="area"
              value="areaContinental"
              checked={area === "areaContinental"}
              onChange={(e) => setArea(e.target.value)}
              className="radio radio-bordered"
              required
            />
            <span className="ml-2">Continental</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="area"
              value="areaInsular"
              checked={area === "areaInsular"}
              onChange={(e) => setArea(e.target.value)}
              className="radio radio-bordered"
              required
            />
            <span className="ml-2">Insular </span>
          </label>
        </div>
      </div>


      <div>
        <label htmlFor="cep" className="block text-sm font-medium text-gray-700">CEP</label>
        <input
          type="number"
          id="cep"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP"
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
            className="mt-2 max-w-xs w-full h-auto rounded-md"
          />
        )}
      </div>
    </BaseForm>
  );
};

export default ServiceAdd;
