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
        // Obtendo o token armazenado (por exemplo, no localStorage)
        const token = localStorage.getItem('authToken'); // Certifique-se de que o token foi salvo com essa chave no login

        // Configuração do cabeçalho com o token de autenticação
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Fazendo a requisição GET com o cabeçalho de autenticação
        const response = await axios.get('https://orlok.pythonanywhere.com/api/v1/service/', { headers });
        setServicos(response.data); // Atualiza o estado com os dados dos serviços
      } catch (err) {
        setError('Falha ao carregar serviços. Por favor, tente novamente.');
        console.error('Erro ao buscar serviços:', err);
      }
    };

    fetchServicos();
  }, []);

  const handleSolicitarServico = (nomeServico) => {
    alert(`Serviço solicitado: ${nomeServico}`);
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
                  to="/service-request"
                  className="btn btn-primary mt-4"
                  onClick={() => handleSolicitarServico(servico.nomeServico)}
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
