import React, { useState } from 'react';

function SolicitacoesTable() {
  // Dados mockados
  const mockData = [
    {
      protocolo: '123456',
      nomeServico: 'Revisão Elétrica',
      data: '2023-10-10T14:48:00.000Z',
      status: 'Em Andamento',
    },
    {
      protocolo: '654321',
      nomeServico: 'Manutenção de TI',
      data: '2023-09-22T09:20:00.000Z',
      status: 'Concluído',
    },
    {
      protocolo: '987654',
      nomeServico: 'Serviço de Limpeza',
      data: '2023-08-15T11:30:00.000Z',
      status: 'Pendente',
    },
  ];

  const [solicitacoes, setSolicitacoes] = useState(mockData);

  // Função para retornar o estilo do badge com base no status
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Em Andamento':
        return 'badge badge-info badge-outline whitespace-nowrap text-xs';
      case 'Concluído':
        return 'badge badge-success badge-outline whitespace-nowrap text-xs';
      case 'Pendente':
        return 'badge badge-warning badge-outline whitespace-nowrap text-xs';
      default:
        return 'badge badge-neutral badge-outline whitespace-nowrap text-xs';
    }
  };

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Protocolo</th>
          <th>Nome do Serviço</th>
          <th>Data</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {solicitacoes.length > 0 ? (
          solicitacoes.map((solicitacao) => (
            <tr key={solicitacao.protocolo}>
              <td>{solicitacao.protocolo}</td>
              <td>{solicitacao.nomeServico}</td>
              <td>{new Date(solicitacao.data).toLocaleDateString()}</td>
              <td>
                <div className={getStatusBadge(solicitacao.status)}>
                  {solicitacao.status}
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">Nenhuma solicitação encontrada</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default SolicitacoesTable;