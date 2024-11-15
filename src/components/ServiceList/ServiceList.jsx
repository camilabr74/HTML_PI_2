import React, { useState, useEffect } from 'react';
import ButtonCTA from '../ButtonCTA/ButtonCTA';
import ServiceModal from '../Modal/ServiceModal';

const ServiceList = ({ endpoint }) => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [newStatus, setNewStatus] = useState('');
    const [serviceOptions, setServiceOptions] = useState([]);
    const [neighborhoodOptions, setNeighborhoodOptions] = useState([]);
    const [monthOptions, setMonthOptions] = useState([]);
    const [yearOptions, setYearOptions] = useState([]);
    const [selectedServiceFilter, setSelectedServiceFilter] = useState('');
    const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const isCitizenRequest = endpoint === 'https://orlok.pythonanywhere.com/api/v1/citizen/requests';

    const fetchServices = async () => {
        try {
            const response = await fetch(endpoint, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error("Erro ao buscar dados da API");
            }
            const data = await response.json();
            setServices(data);
            
            const servicesList = [];
            const neighborhoods = [];
            const months = [];
            const years = [];

            data.forEach(service => {
                if (service.servico && !servicesList.includes(service.servico)) {
                    servicesList.push(service.servico);
                }
                if (service.bairro && !neighborhoods.includes(service.bairro)) {
                    neighborhoods.push(service.bairro);
                }
                const [day, month, year] = service.data.split('/');
                const validMonth = parseInt(month, 10);
                const validYear = parseInt(year, 10);
                
                if (!isNaN(validMonth) && !months.includes(validMonth)) {
                    months.push(validMonth);
                }
                if (!isNaN(validYear) && !years.includes(validYear)) {
                    years.push(validYear);
                }
            });

            setServiceOptions(servicesList);
            setNeighborhoodOptions(neighborhoods);
            setMonthOptions(months);
            setYearOptions(years);
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, [endpoint]);

    const handleOpenModal = (service) => {
        setSelectedService(service);
        setNewStatus(service.status);
    };

    const handleStatusChange = (event) => {
        setNewStatus(event.target.value);
    };

    const handleUpdateStatus = async (updatedService) => {
        try {
            await fetchServices();
            setServices((prevServices) =>
                prevServices.map((service) =>
                    service.id === updatedService.id
                        ? { ...service, status: updatedService.status, data_prevista: updatedService.data_prevista }
                        : service
                )
            );
            setSelectedService(null);
        } catch (error) {
            console.error("Erro ao atualizar os dados dos serviços:", error);
        }
    };

    const filteredServices = services.filter((service) => {
        const [day, month, year] = service.data.split('/');
        const serviceMonth = parseInt(month, 10);
        const serviceYear = parseInt(year, 10);

        return (
            (selectedServiceFilter === '' || service.servico === selectedServiceFilter) &&
            (selectedNeighborhood === '' || service.bairro === selectedNeighborhood) &&
            (selectedMonth === '' || serviceMonth === parseInt(selectedMonth)) &&
            (selectedYear === '' || serviceYear === parseInt(selectedYear))
        );
    });

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Serviços de Zeladoria</h2>

            {/* Dropdowns de filtros estilo DaisyUI */}
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <label htmlFor="serviceFilter" className="label">
                        <span className="label-text">Serviço</span>
                    </label>
                    <select
                        id="serviceFilter"
                        className="select select-bordered w-full"
                        value={selectedServiceFilter}
                        onChange={(e) => setSelectedServiceFilter(e.target.value)}
                    >
                        <option value="">Todos os Serviços</option>
                        {serviceOptions.map((service) => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="neighborhood" className="label">
                        <span className="label-text">Bairro</span>
                    </label>
                    <select
                        id="neighborhood"
                        className="select select-bordered w-full"
                        value={selectedNeighborhood}
                        onChange={(e) => setSelectedNeighborhood(e.target.value)}
                    >
                        <option value="">Todos os Bairros</option>
                        {neighborhoodOptions.map((neighborhood) => (
                            <option key={neighborhood} value={neighborhood}>
                                {neighborhood}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="month" className="label">
                        <span className="label-text">Mês</span>
                    </label>
                    <select
                        id="month"
                        className="select select-bordered w-full"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                        <option value="">Todos os Meses</option>
                        {monthOptions.map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="year" className="label">
                        <span className="label-text">Ano</span>
                    </label>
                    <select
                        id="year"
                        className="select select-bordered w-full"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="">Todos os Anos</option>
                        {yearOptions.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

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
                                {filteredServices
                                    .filter((service) => service.status === status)
                                    .length > 0 ? (
                                    filteredServices
                                        .filter((service) => service.status === status)
                                        .map((service, index) => (
                                            <tr key={index}>
                                                <td>{service.protocolo}</td>
                                                <td>{service.servico}</td>
                                                <td>{service.rua}</td>
                                                <td>{service.numero}</td>
                                                <td>{service.bairro}</td>
                                                <td>{service.data}</td>
                                                <td>
                                                    {service.status === 'pendente' && !service.data_prevista
                                                        ? 'Não agendado'
                                                        : service.data_prevista}
                                                </td>
                                                <td>{service.user_name}</td>
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

                        {selectedService && (
                            <ServiceModal
                                service={selectedService}
                                newStatus={newStatus}
                                onClose={() => setSelectedService(null)}
                                onStatusChange={handleStatusChange}
                                onUpdateService={handleUpdateStatus}
                                showDateAndStatusFields={!isCitizenRequest}
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceList;
