import "./Home.css";
import Header from "../../components/Header/Header";
import homeBgImg from "../../assets/img-bg-home.jpg";

function Home() {
  return (
    <main className="home">
      <div className="header-overlay">
        <Header />
      </div>

      <section
        className="hero"
        style={{ backgroundImage: `url(${homeBgImg})` }}
        aria-label="Imagem de destaque"
      >
        <div className="hero-content">
          <h1>Bem-vindo ao PescaPro!</h1>
          <span>
            Gerencie torneios de pesca de forma simples, organizada e
            profissional. Crie competições, acompanhe resultados e conecte
            pescadores de todo o Brasil em um só lugar.
          </span>
        </div>
      </section>
    </main>
  );
}

export default Home;
