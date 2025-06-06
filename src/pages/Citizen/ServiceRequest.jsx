import React, { useState, useEffect } from 'react';
import BaseForm from '../../components/BaseForm/BaseForm';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

const bairrosSaoVicente = {
  insular: [
    "Beira Mar", "Boa Vista", "Centro", "Catiapoã", "Esplanada dos Barreiros", "Gonzaguinha", "Ilha Porchat",
    "Itararé", "Japuí", "Jardim Guaçu", "Jardim Independência", "Jardim Irmã Dolores", "Cidade Náutica", "Náutica I",
    "Náutica II", "Náutica III", "Parque Bitaru", "Parque São Vicente", "Vila Margarida", "Vila Valença", "Vila Voturuá"
  ],
  continental: [
    "Área Rural", "Humaitá", "Jardim Rio Branco", "Jardim Samaritá", "Jardim São Manoel", "Parque das Bandeiras",
    "Parque Continental", "Vila Ema", "Vila Melo", "Vila Nossa Senhora de Fátima ou Vila Fátima",
    "Vila Nova Mariana", "Vila São Jorge"
  ]
};

const ServiceAdd = () => {
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [area, setArea] = useState('');
  const [cep, setCep] = useState('');
  const [servico, setServico] = useState('');
  const [desc, setDesc] = useState('');
  const [anexo, setAnexo] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  const navigate = useNavigate();

  // Recuperar o serviço selecionado do localStorage ao carregar o componente
  useEffect(() => {
    const selectedService = localStorage.getItem('selectedService');

    if (selectedService) {
      setServico(selectedService); // Define o estado com o serviço recuperado
    }

  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');

    if (!token) {
      setToastMessage("Usuário não autenticado. Por favor, faça login novamente.");
      setToastType("alert-info");
      return;
    }

    const formData = new FormData();
    formData.append('rua', rua);
    formData.append('bairro', bairro);
    formData.append('numero', numero);
    formData.append('area', area);
    formData.append('cep', cep);
    formData.append('servico', servico);
    formData.append('desc', desc);
    if (anexo) formData.append('file', anexo);

    try {
      const response = await fetch('https://orlok.pythonanywhere.com/api/v1/janitorial/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setToastMessage("Solicitação enviada com sucesso!");
        setToastType("alert-success");

        // Resetar campos após sucesso
        setRua('');
        setBairro('');
        setNumero('');
        setArea('');
        setCep('');
        setAnexo(null);
        setImagePreview(null);

        setTimeout(() => {
          navigate('/home');
        }, 2500);
      } else {
        setToastMessage(`Erro: ${result.error}`);
        setToastType("alert-info");
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      setToastMessage('Erro ao enviar solicitação. Por favor, tente novamente.');
      setToastType("alert-info");
    }
  };

  const handleanexoChange = (e) => {
    const file = e.target.files[0];
    setAnexo(file);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
    setBairro('');
  };

  // Função para atualizar o valor da descrição
  const handleChange = (e) => {
    setDesc(e.target.value);
  };

  return (
    <BaseForm onSubmit={handleFormSubmit}>

      <h1 className="text-2xl p-2 font-bold text-accent">
        SOLICITAR SERVIÇO
      </h1>
      
      <div>
        <label htmlFor="servico" className="block text-sm font-medium form-label">Serviço</label>
        <input
          type="text"
          id="servico"
          value={servico}
          readOnly
          placeholder="Digite o serviço"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div role="alert" className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span id="photo-info">Atenção! O endereço da solicitação deve ser o do local onde o serviço será realizado.</span>
      </div>

      <div>
        <label className="block text-sm font-medium form-label">Área</label>
        <div className="mt-1 space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="area"
              value="continental"
              checked={area === "continental"}
              onChange={handleAreaChange}
              className="radio radio-bordered"
              required
            />
            <span className="ml-2">Continental</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="area"
              value="insular"
              checked={area === "insular"}
              onChange={handleAreaChange}
              className="radio radio-bordered"
              required
            />
            <span className="ml-2">Insular</span>
          </label>
        </div>
      </div>

      <div>
        <label
          htmlFor="bairro"
          className="block text-sm font-medium form-label"
        >
          {`Bairro - Exibindo os bairros da área selecionada acima: ${area || ""}`}
        </label>
        <select
          id="bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          className="select select-bordered w-full mt-1"
          required
          disabled={!area} // Desativa o campo até que a área seja selecionada
        >
          <option value="" disabled>Selecione o bairro</option>
          {Array.isArray(bairrosSaoVicente[area]) && bairrosSaoVicente[area].map((bairro, index) => (
            <option key={index} value={bairro}>{bairro}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cep" className="block text-sm font-medium form-label">CEP</label>
        <InputMask
          mask="99999-999"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite seu CEP"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="rua" className="block text-sm font-medium form-label">Rua</label>
        <input
          type="text"
          id="rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          placeholder="Digite o nome da rua"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="numero" className="block text-sm font-medium form-label">Número</label>
        <input
          type="text"
          id="numero"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Número"
          className="input input-bordered w-full mt-1"
          required
        />
      </div>

      <div>
        <label htmlFor="desc" className="block text-sm font-medium form-label">Descreva com detalhes a sua solicitação</label>
        <textarea
          id="desc"
          value={desc} // O valor da descrição vem do estado
          onChange={handleChange} // Atualiza o estado quando o usuário digita
          placeholder="Descreva sua solicitação (ex: local, proximidade, tipo de material a ser retirado, etc)"
          className="textarea textarea-bordered w-full mt-1"
          style={{ whiteSpace: 'pre-line' }}
          rows="3"
          required
        ></textarea>
      </div>

      <div role="alert" className="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Adicionar foto facilita o atendimento no local do serviço solicitado.</span>

      </div>

      <div>
        <label htmlFor="anexo" className="block text-sm font-medium form-label">Anexo</label>
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

      {toastMessage && (
        <div className="toast toast-center toast-middle">
          <div className={`alert ${toastType}`}>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

    </BaseForm>
  );
};

export default ServiceAdd;
