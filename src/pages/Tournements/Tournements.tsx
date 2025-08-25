import CardTournement from "../../components/CardTournement/CardTournement";
import Header from "../../components/Header/Header";
import tournamentsMock from "../../mocks/TournementsMock";
import "./Tournements.css";

function Tournements() {
  return (
    <main className="tournements-page">
      <div className="header-container">
         <Header />
      </div>

       <section className="tournements-hero">
        <h1>Torneios de Pesca</h1>
        <p>Provas de praia e muito mais. Encontre e participe do próximo evento.</p>
      </section>

      <section className="tournements-grid">
         {tournamentsMock.map((t) => (
            <CardTournement
               key={t.id}
               imageUrl={t.imageUrl}
               title={t.title}
               date={t.date}
               location={t.location}
            />
         ))}
      </section>
    </main>
  );
}

export default Tournements;
