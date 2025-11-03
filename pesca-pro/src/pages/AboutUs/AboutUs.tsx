import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <main className="about-us-page">
        <div className="header-container">
          <Header />
        </div>

        <section className="about-hero">
          <h1>Sobre Nós</h1>
          <p>
            Conectando pescadores e promovendo os melhores torneios de pesca do
            Nordeste.
          </p>
        </section>

        <section className="about-content">
          <div className="about-section">
            <h2>Nossa História</h2>
            <p>
              Fundada em 2020, a PescaPro nasceu da paixão pela pesca esportiva
              e do desejo de conectar pescadores de toda a região Nordeste.
              Começamos organizando pequenos torneios locais em Alagoas e hoje
              somos referência em competições de pesca de praia no Brasil.
            </p>
          </div>

          <div className="about-section">
            <h2>Nossa Missão</h2>
            <p>
              Promover a pesca esportiva sustentável, conectar comunidades de
              pescadores e oferecer as melhores experiências em torneios de
              pesca. Acreditamos que cada pescaria é uma oportunidade de
              aprendizado, conexão com a natureza e fortalecimento de laços.
            </p>
          </div>

          <div className="about-section">
            <h2>O Que Fazemos</h2>
            <p>
              Organizamos torneios de pesca de praia em todo o litoral
              nordestino, desde competições amadoras até campeonatos
              profissionais. Nossa plataforma conecta pescadores, divulga
              eventos e promove o crescimento da comunidade pesqueira esportiva.
            </p>
            <ul>
              <li>Organização de torneios e competições</li>
              <li>Plataforma de inscrições online</li>
              <li>Ranking de pescadores</li>
              <li>Eventos corporativos e sociais</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Nossa Equipe</h2>
            <p>
              Somos uma equipe apaixonada por pesca, formada por pescadores
              experientes, organizadores de eventos e desenvolvedores. Unidos
              pela paixão pelo mar e pela pesca responsável, trabalhamos para
              oferecer sempre a melhor experiência para nossa comunidade.
            </p>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default AboutUs;
