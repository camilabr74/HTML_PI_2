import React, { useState, useEffect } from 'react';
import ButtonCTA from '../../components/ButtonCTA/ButtonCTA';
import axios from 'axios';

function ServiceSelection() {
  const [servicos, setServicos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Função para buscar serviços da API com token de autenticação
    const fetchServicos = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get('https://orlok.pythonanywhere.com/api/v1/service/', { headers });
        setServicos(response.data);
      } catch (err) {
        setError('Falha ao carregar serviços. Por favor, tente novamente.');
        console.error('Erro ao buscar serviços:', err);
      }
    };

    fetchServicos();
  }, []);

  const handleSolicitarServico = (nomeServico, descricaoServico) => {
    localStorage.setItem('selectedService', nomeServico); // Armazena o serviço selecionado no localStorage
    localStorage.setItem('serviceDescription', descricaoServico); // Armazena a descrição do serviço

    setTimeout(() => {
      window.location.href = '/HTML_PI_2#/HTML_PI_2/service-request'; // Redireciona para a página de solicitação de serviço
    }, 100); // Adiciona um pequeno atraso para garantir que o localStorage seja atualizado
  };

  return (
    <div className="w-full p-8">
      {error && <p className="text-red-500">{error}</p>}
      {servicos.length > 0 ? (
        servicos.map((servico) => (
          <div key={servico.id} className="collapse bg-base-200 my-2">
            <input type="radio" name="servico-accordion" />
            <div className="collapse-title text-lg font-medium">
              {servico.nome}
            </div>
            <div className="collapse-content">
              <p>{servico.desc}</p>
              <p>{servico.prazo}</p>
              <div className="flex flex-col justify-center items-center">
                <ButtonCTA
                  className="btn btn-primary mt-4"
                  onClick={() => handleSolicitarServico(servico.nome, `${servico.desc}\nPrazo: ${servico.prazo} dias`)}
                  >
                  Solicitar Serviço
                </ButtonCTA>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum serviço disponível</p>
      )}
    </div>
  );
}

export default ServiceSelection;
