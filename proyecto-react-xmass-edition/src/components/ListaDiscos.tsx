import type { Disco } from '../data';
import DiscoCard from './DiscoCard';
import './ListaDiscos.css';

interface ListaProps {
  discos: Disco[]; // Recibe la lista de discos
  alSeleccionar: (disco: Disco) => void; // Función para avisar al padre
} 

export default function ListaDiscos({ discos, alSeleccionar }: ListaProps) {
  return (
    <div className="lista-grid">
      {discos.map((unDisco) => (
        <DiscoCard
        key={unDisco.id}
        disco={unDisco}
        onClick={() => alSeleccionar(unDisco)}
        />
      ))}   

    </div>
  );
}