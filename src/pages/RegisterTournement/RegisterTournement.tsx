import { useState } from "react";
import Header from "../../components/Header/Header";
import "./RegisterTournement.css";
import Footer from "../../components/Footer/Footer";

function RegisterTournament() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    maxParticipants: "",
    prize: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do torneio:", formData);
    alert("Solicitação enviada! Entraremos em contato em breve.");

    setFormData({
      name: "",
      date: "",
      location: "",
      description: "",
      maxParticipants: "",
      prize: "",
      contactEmail: "",
      contactPhone: "",
    });
  };

  return (
    <>
      <main className="create-tournament-page">
        <div className="header-container">
          <Header />
        </div>

        <section className="create-hero">
          <h1>Cadastrar Torneio</h1>
          <p>
            Organize seu torneio de pesca e conecte-se com pescadores de toda
            região.
          </p>
        </section>

        <section className="create-content">
          <form className="tournament-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome do Torneio *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ex: Torneio Praia Azul 2025"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Data do Evento *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="maxParticipants">Máximo de Participantes</label>
                <input
                  type="number"
                  id="maxParticipants"
                  name="maxParticipants"
                  value={formData.maxParticipants}
                  onChange={handleChange}
                  placeholder="50"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location">Local do Evento *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Ex: Praia Pontal do Peba - Piaçabuçu, AL"
              />
            </div>

            <div className="form-group">
              <label htmlFor="prize">Premiação</label>
              <input
                type="text"
                id="prize"
                name="prize"
                value={formData.prize}
                onChange={handleChange}
                placeholder="Ex: R$ 5.000 em prêmios"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descrição do Evento</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Descreva seu torneio, regras, categorias, etc."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactEmail">E-mail para Contato *</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactPhone">Telefone</label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder="(82) 99999-9999"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                Enviar Solicitação
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}

export default RegisterTournament;
