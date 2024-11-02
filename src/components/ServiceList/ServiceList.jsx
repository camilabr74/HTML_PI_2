import React, { useState } from 'react';
import ButtonCTA from '../ButtonCTA/ButtonCTA';
import ServiceModal from '../Modal/ServiceModal';
// Exemplo de dados com status inicial "Pendente"
const initialServices = [
    {
        protocolo: '12345',
        servico: 'Corte de Grama',
        rua: 'Rua das Flores',
        numero: '10',
        bairro: 'Centro',
        dataSolicitacao: '2024-11-01',
        prazo: '2024-11-10',
        solicitante: 'João Silva',
        status: 'Pendente',
        anexo: null, // URL da foto anexada
    },
    {
        protocolo: '67890',
        servico: 'Pintura de Faixas',
        rua: 'Avenida Principal',
        numero: '100',
        bairro: 'Vila Nova',
        dataSolicitacao: '2024-10-20',
        prazo: '2024-11-05',
        solicitante: 'Maria Souza',
        status: 'Em andamento',
        anexo: null, // Sem foto anexada
    },
];

const ServiceList = () => {
    const [services, setServices] = useState(initialServices);
    const [selectedService, setSelectedService] = useState(null);
    const [newStatus, setNewStatus] = useState('');

    const handleOpenModal = (service) => {
        setSelectedService(service);
        setNewStatus(service.status);
    };

    const handleStatusChange = (event) => {
        setNewStatus(event.target.value);
    };

    const handleUpdateStatus = () => {
        setServices((prevServices) =>
            prevServices.map((service) =>
                service.protocolo === selectedService.protocolo
                    ? { ...service, status: newStatus }
                    : service
            )
        );
        setSelectedService(null);
    };

    // Filtra serviços por status
    const servicesByStatus = (status) => {
        return services.filter((service) => service.status === status);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Serviços de Zeladoria</h2>

            {['Pendente', 'Em andamento', 'Serviço Pausado', 'Finalizado'].map((status) => (
                <div key={status} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{status}</h3>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Protocolo</th>
                                    <th>Serviço</th>
                                    <th>Rua</th>
                                    <th>Número</th>
                                    <th>Bairro</th>
                                    <th>Data da Solicitação</th>
                                    <th>Prazo</th>
                                    <th>Solicitante</th>
                                    <th>Detalhes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {servicesByStatus(status).length > 0 ? (
                                    servicesByStatus(status).map((service, index) => (
                                        <tr key={index}>
                                            <td>{service.protocolo}</td>
                                            <td>{service.servico}</td>
                                            <td>{service.rua}</td>
                                            <td>{service.numero}</td>
                                            <td>{service.bairro}</td>
                                            <td>{service.dataSolicitacao}</td>
                                            <td>{service.prazo}</td>
                                            <td>{service.solicitante}</td>
                                            <td>
                                                <ButtonCTA
                                                    onClick={() => handleOpenModal(service)}
                                                >
                                                    Ver Detalhes
                                                </ButtonCTA>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="9" className="text-center text-gray-500">
                                            Nenhum serviço encontrado para este status.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <ServiceModal
                            service={selectedService}
                            newStatus={newStatus}
                            onClose={() => setSelectedService(null)}
                            onStatusChange={handleStatusChange}
                            onUpdateStatus={handleUpdateStatus}
                        />

                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceList;
