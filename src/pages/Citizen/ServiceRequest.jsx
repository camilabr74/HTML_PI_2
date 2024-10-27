import React, { useState } from 'react';
import BaseForm from '../../components/BaseForm/BaseForm';

const ServiceAdd = ({ onSubmit }) => {
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [area, setArea] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleFormSubmit = () => {
    onSubmit({
      street,
      neighborhood,
      number,
      area,
      zipCode,
      service,
      description,
      attachment,
      date,
      time,
      status: 'em análise',
    });
    // Resetar campos se necessário
    setStreet('');
    setNeighborhood('');
    setNumber('');
    setArea('');
    setZipCode('');
    setService('');
    setDescription('');
    setAttachment(null);
    setDate('');
    setTime('');
  };

  return (
    <BaseForm onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="street" className="block text-sm font-medium text-gray-700">Rua</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Digite a rua"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700">Bairro</label>
        <input
          type="text"
          id="neighborhood"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          placeholder="Digite o bairro"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">Número</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
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
          <option value="Continental">Área Continental</option>
          <option value="Insular">Área Insular</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
      </div>

      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">CEP</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Digite o CEP"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Serviço</label>
        <input
          type="text"
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="Digite o serviço"
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
          placeholder="Digite a descrição"
          className="textarea textarea-bordered w-full mt-1"
          rows="4"
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Anexo</label>
        <input
          type="file"
          id="attachment"
          onChange={(e) => setAttachment(e.target.files[0])}
          className="file-input file-input-bordered w-full mt-1"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Data</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input input-bordered w-full mt-1"
          required
        />
      </div>
    </BaseForm>
  );
};

export default ServiceAdd;
