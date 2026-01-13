import type { Disco } from '../data';
import './DiscoCard.css';

interface DiscoCardProps {
  disco: Disco; // ¡Adiós error de any!
  onClick: () => void;
}

function DiscoCard({ disco, onClick }: DiscoCardProps) {
  return (
    <div className="disco-card" onClick={onClick}>
      <img src={disco.portada} alt={disco.titulo} className="disco-cover" />
      <div className="disco-info">
        <h3>{disco.titulo}</h3>
        <p>{disco.artista}</p>
      </div>
    </div>
  )
}

export default DiscoCard