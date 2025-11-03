import "./CardTournement.css";

type CardTournementProps = {
   imageUrl: string;
   title: string;
   date: string;
   location: string;
   status: string;
}

function CardTournement({ imageUrl, title, date, location, status }: CardTournementProps) {
  return (
    <div className="card-container">
      <div className="card-top">
         <img src={imageUrl} alt={title} />
      </div>

      <div className="card-bottom">
         <h3>{title}</h3>
         <p>{date}</p>
         <p>{location}</p>
         <p className={`status ${status}`}>{status}</p>
      </div>
    </div>
  );
}

export default CardTournement;
