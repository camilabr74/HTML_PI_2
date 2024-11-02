import React from 'react';

const ServiceModal = ({ service, newStatus, onClose, onStatusChange, onUpdateStatus }) => {
    if (!service) return null; // Retorna null se não houver um serviço selecionado, evitando renderizar o modal.

    return (
        <div className="modal modal-open fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="modal-box p-6 rounded-lg shadow-lg">
                <h2 className="font-bold text-lg">Detalhes do Serviço</h2>
                <p>Protocolo: {service.protocolo}</p>
                <p>Serviço: {service.servico}</p>
                <p>Rua: {service.rua}</p>
                <p>Número: {service.numero}</p>
                <p>Bairro: {service.bairro}</p>
                <p>Data da Solicitação: {service.dataSolicitacao}</p>
                <p>Prazo: {service.prazo}</p>
                <p>Solicitante: {service.solicitante}</p>

                <div className="mt-4">
                    <h3 className="font-bold">Anexo:</h3>
                    {service.anexo ? (
                        <img
                            src={service.anexo}
                            alt="Anexo do serviço"
                            className="w-full h-auto mt-2 rounded-lg"
                        />
                    ) : (
                        <p className="text-gray-500">Sem foto adicionada</p>
                    )}
                </div>

                <div className="mt-4">
                    <label className="label">
                        <span className="label-text">Alterar Status</span>
                    </label>
                    <select
                        className="select select-bordered w-full"
                        value={newStatus}
                        onChange={onStatusChange}
                    >
                        <option value="Pendente">Pendente</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Serviço Pausado">Serviço Pausado</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                </div>

                <div className="modal-action mt-4 flex justify-end space-x-2">
                    <button
                        className="btn btn-success"
                        onClick={onUpdateStatus}
                    >
                        Atualizar Status
                    </button>
                    <button
                        className="btn"
                        onClick={onClose}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
