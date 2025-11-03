import { useState, useEffect } from "react";
import "./AdminPage.css";

interface Torneio {
  id: number;
  nome_torneio: string;
  data_evento: string;
  maximo_participantes: number;
  local_evento: string;
  premiacao?: string;
  descricao_evento?: string;
  email_contato: string;
  telefone?: string;
  status: 'pendente' | 'aprovado' | 'rejeitado';
  created_at: string;
  updated_at: string;
}

function AdminPage() {
  const [torneios, setTorneios] = useState<Torneio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTorneios = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3022/api/torneios');

      if (!response.ok) {
        throw new Error('Erro ao buscar torneios');
      }

      const data = await response.json();
      setTorneios(data);

    } catch (error) {
      console.error('Erro ao buscar torneios:', error);
      setError('Erro ao carregar torneios');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: 'aprovado' | 'rejeitado') => {
    try {
      const response = await fetch(`http://localhost:3022/api/torneios/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar status');
      }

      setTorneios(prev =>
        prev.map(torneio =>
          torneio.id === id ? { ...torneio, status } : torneio
        )
      );

      alert(`Torneio ${status} com sucesso!`);

    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      alert('Erro ao atualizar status do torneio');
    }
  };

  const deleteTorneio = async (id: number) => {
    if (!confirm('Tem certeza que deseja deletar este torneio?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3022/api/torneios/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar torneio');
      }

      setTorneios(prev => prev.filter(torneio => torneio.id !== id));
      alert('Torneio deletado com sucesso!');

    } catch (error) {
      console.error('Erro ao deletar torneio:', error);
      alert('Erro ao deletar torneio');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  useEffect(() => {
    fetchTorneios();
  }, []);

  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-header">
          <h1>Painel Administrativo</h1>
        </div>
        <div className="loading">Carregando torneios...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-page">
        <div className="admin-header">
          <h1>Painel Administrativo</h1>
        </div>
        <div className="error">
          {error}
          <button onClick={fetchTorneios}>Tentar novamente</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Painel Administrativo</h1>
        <p>Gerencie os torneios de pesca</p>
        <button onClick={fetchTorneios} className="refresh-btn">
          Atualizar Lista
        </button>
      </div>

      <div className="admin-content">
        {torneios.length === 0 ? (
          <div className="no-data">
            <p>Nenhum torneio encontrado</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome do Torneio</th>
                  <th>Data</th>
                  <th>Local</th>
                  <th>Participantes</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {torneios.map((torneio) => (
                  <tr key={torneio.id}>
                    <td>{torneio.id}</td>
                    <td className="tournament-name">
                      <strong>{torneio.nome_torneio}</strong>
                      {torneio.descricao_evento && (
                        <small>{torneio.descricao_evento.substring(0, 50)}...</small>
                      )}
                    </td>
                    <td>{formatDate(torneio.data_evento)}</td>
                    <td>{torneio.local_evento}</td>
                    <td>{torneio.maximo_participantes}</td>
                    <td>{torneio.email_contato}</td>
                    <td>
                      <span className={`status-badge status-${torneio.status}`}>
                        {torneio.status}
                      </span>
                    </td>
                    <td className="actions">
                      {torneio.status === 'pendente' && (
                        <>
                          <button
                            onClick={() => updateStatus(torneio.id, 'aprovado')}
                            className="btn btn-approve"
                          >
                            Aprovar
                          </button>
                          <button
                            onClick={() => updateStatus(torneio.id, 'rejeitado')}
                            className="btn btn-reject"
                          >
                            Rejeitar
                          </button>
                        </>
                      )}

                      {torneio.status === 'aprovado' && (
                        <button
                          onClick={() => updateStatus(torneio.id, 'rejeitado')}
                          className="btn btn-reject"
                        >
                          Rejeitar
                        </button>
                      )}

                      {torneio.status === 'rejeitado' && (
                        <button
                          onClick={() => updateStatus(torneio.id, 'aprovado')}
                          className="btn btn-approve"
                        >
                          Aprovar
                        </button>
                      )}

                      <button
                        onClick={() => deleteTorneio(torneio.id)}
                        className="btn btn-delete"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;