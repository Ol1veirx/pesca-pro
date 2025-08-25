import "./CardTournement.css";

type CardTournementProps = {
   imageUrl: string;
   title: string;
   date: string;
   location: string;
}

function CardTournement({ imageUrl, title, date, location }: CardTournementProps) {
  return (
    <div className="card-container">
      <div className="card-top">
         <img src={imageUrl} alt={title} />
      </div>

      <div className="card-bottom">
         <h3>{title}</h3>
         <p>{date}</p>
         <p>{location}</p>
      </div>
    </div>
  );
}

export default CardTournement;
