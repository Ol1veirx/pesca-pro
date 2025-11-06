import { useEffect, useState } from "react";
import { BsDatabaseFillSlash } from "react-icons/bs";
import CardTournement from "../../components/CardTournement/CardTournement";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Tournements.css";

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
  status: "pendente" | "aprovado" | "rejeitado";
  created_at: string;
  updated_at: string;
}

function Tournements() {
  const [torneios, setTorneios] = useState<Torneio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const img =
    "https://images.unsplash.com/photo-1541742425281-c1d3fc8aff96?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    const fetchTorneios = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3022/api/torneios");

        if (!response.ok) {
          throw new Error("Erro ao buscar torneios");
        }

        const data = await response.json();

        const torneiosAprovados = data.filter(
          (torneio: Torneio) => torneio.status === "aprovado"
        );
        setTorneios(data);
      } catch (error) {
        console.error("Erro ao buscar torneios:", error);
        setError("Erro ao carregar torneios. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchTorneios();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <>
      <main className="tournements-page">
        <div className="header-container">
          <Header />
        </div>

        <section className="tournements-hero">
          <h1>Torneios de Pesca</h1>
          <p>
            Provas de praia e muito mais. Encontre e participe do próximo
            evento.
          </p>
        </section>
        {torneios.length === 0 ? (
          <div className="no-tournement">
            <p>Nenhum torneio encontrado <BsDatabaseFillSlash /></p>
          </div>
        ) : (
          <section className="tournements-grid">
            {torneios.map((t) => (
              <CardTournement
                key={t.id}
                imageUrl={img}
                title={t.nome_torneio}
                date={formatDate(t.data_evento)}
                location={t.local_evento}
                contact_mail={t.email_contato}
                status={t.status}
              />
            ))}
          </section>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default Tournements;
