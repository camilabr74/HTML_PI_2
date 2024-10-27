import React, { useState } from 'react';
import ButtonCTA from '../../components/ButtonCTA/ButtonCTA';

function ServiceSelection() {
  // Dados mockados dos serviços
  const mockData = [
    {
      id: '1',
      nomeServico: 'Revisão Elétrica',
      descricao: 'Verificação completa do sistema elétrico de sua casa ou empresa, com revisão de fiação e instalação de novos pontos.',
    },
    {
      id: '2',
      nomeServico: 'Manutenção de TI',
      descricao: 'Suporte técnico para computadores, redes e infraestrutura de TI, garantindo o bom funcionamento dos seus equipamentos.',
    },
    {
      id: '3',
      nomeServico: 'Serviço de Limpeza',
      descricao: 'Limpeza profissional de escritórios e ambientes corporativos, com uso de produtos específicos para cada tipo de superfície.',
    },
  ];

  const [servicos, setServicos] = useState(mockData);

  const handleSolicitarServico = (nomeServico) => {
    alert(`Serviço solicitado: ${nomeServico}`);
  };

  return (
    <div className="w-full p-8">
      {servicos.length > 0 ? (
        servicos.map((servico) => (
          <div key={servico.id} className="collapse bg-base-200 my-2">
            <input
              type="radio"
              name="servico-accordion"
              defaultChecked={servico.id === '1'}
            />
            <div className="collapse-title text-lg font-medium">
              {servico.nomeServico}
            </div>
            <div className="collapse-content">
              <p>{servico.descricao}</p>
              <div className="flex flex-col justify-center items-center">
                  <ButtonCTA to="/service-request"
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
