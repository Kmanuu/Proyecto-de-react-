import { type Camiseta } from '../../data/camisetas';
import "./GridCamisetas.css"; 
import BotonCorazon from '../BotonCorazon';

interface GridProps {
  camisetas: Camiseta[];
  onSeleccionar: (camiseta: Camiseta) => void;
}

// La clase GridCamisetas recorre la lista 
export default function GridCamisetas({ camisetas, onSeleccionar }: GridProps) {
  return (
    <div className="grid-container">
      {camisetas.map((camiseta) => (
        <div 
            key={camiseta.id} 
            className="card" 
            onClick={() => onSeleccionar(camiseta)}
        >
            <div className="card-image-wrapper">
                <img src={camiseta.imagen} alt={camiseta.equipo} />
                <BotonCorazon />
            </div>
            
            <div className="card-info">
                <div>
                    <p className="card-title">{camiseta.equipo}</p>
                    <p className="card-subtitle">{camiseta.temporada}</p>
                </div>
                <span className="card-price">{camiseta.precio} €</span>
            </div>
        </div>
      ))}
    </div>
  );
}