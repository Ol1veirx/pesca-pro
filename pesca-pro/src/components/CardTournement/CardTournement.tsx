import "./CardTournement.css";

type CardTournementProps = {
   imageUrl: string;
   title: string;
   date: string;
   location: string;
   status: string;
   contact_mail: string;
}

function CardTournement({ imageUrl, title, date, location, contact_mail, status }: CardTournementProps) {
  return (
    <div className="card-container">
      <div className="card-top">
         <img src={imageUrl} alt={title} />
      </div>

      <div className="card-bottom">
         <h3>{title}</h3>
         <p>Data: {date}</p>
         <p>Local: {location}</p>
         <p>Contato para Inscrição: {contact_mail}</p>
         <p className={`status ${status}`}>{status}</p>
      </div>
    </div>
  );
}

export default CardTournement;
