import React from "react";

// Definindo a interface para uma Estação
interface Estacao {
    nome: string;
    horario: string;
    contato: string;
    status: boolean;
    endereco_id: number;
    gestor_id: number;
    created_at: string;
    updated_at: string;
}

const Estacoes: React.FC = () => {
    // Lista de estações
    const estacoes: Estacao[] = [
        {
            nome: "Estação Tech Sol e Mar",
            horario: "08:00 - 18:00",
            contato: "solmar@contato.com",
            status: true,
            endereco_id: 1,
            gestor_id: 1,
            created_at: "2024-09-01T00:00:00",
            updated_at: "2024-09-01T00:00:00"
        },
        {
            nome: "Estação Tech Nova Vida",
            horario: "09:00 - 17:00",
            contato: "novavida@contato.com",
            status: true,
            endereco_id: 2,
            gestor_id: 2,
            created_at: "2024-09-01T00:00:00",
            updated_at: "2024-09-01T00:00:00"
        },
        {
            nome: "Estação Tech Itapera",
            horario: "10:00 - 16:00",
            contato: "itapera@contato.com",
            status: true,
            endereco_id: 3,
            gestor_id: 3,
            created_at: "2024-09-01T00:00:00",
            updated_at: "2024-09-01T00:00:00"
        },
        {
            nome: "Estação Tech Maracanã",
            horario: "07:00 - 19:00",
            contato: "maracana@contato.com",
            status: true,
            endereco_id: 4,
            gestor_id: 4,
            created_at: "2024-09-01T00:00:00",
            updated_at: "2024-09-01T00:00:00"
        },
        {
            nome: "Estação Tech Vila São José II",
            horario: "08:00 - 18:00",
            contato: "vilasaojose@contato.com",
            status: true,
            endereco_id: 5,
            gestor_id: 5,
            created_at: "2024-09-01T00:00:00",
            updated_at: "2024-09-01T00:00:00"
        },
        {
            nome: "Estação Tech Forquilha",
            horario: "08:00 - 18:00",
            contato: "forquilha@contato.com",
            status: false,
            endereco_id: 6,
            gestor_id: 3,
            created_at: "2024-09-01T00:00:00",
            updated_at: "2024-09-01T00:00:00"
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todas as Estações</h1>

            {/* Grid de Estações */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {estacoes.map(estacao => (
                    <div
                        key={estacao.endereco_id}
                        className="p-5 bg-cinza mx-2 my-2 rounded shadow-lg"
                    >
                        <h2 className="whitespace-nowrap text-lg font-semibold mb-2">{estacao.nome}</h2>
                        <div className="text-sm">
                            <p><strong>Horário:</strong> {estacao.horario}</p>
                            <p className="whitespace-nowrap"><strong>Contato:</strong> {estacao.contato}</p>
                            <p><strong>Status:</strong> {estacao.status ? 'Ativa' : 'Inativa'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Estacoes;
