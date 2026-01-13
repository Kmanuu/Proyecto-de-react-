import type { Disco } from '../data'; // Importamos el molde y usamos 'type'
import DiscoCard from './DiscoCard';

interface ListaProps {
  discos: Disco[]; // Recibe la lista de discos
  alSeleccionar: (disco: Disco) => void; // Función para avisar al padre
}

function ListaDiscos({ discos, alSeleccionar }: ListaProps) {
  return (
    <div className="lista-scroll">
      {discos.map((disco) => (
        <DiscoCard 
          key={disco.id} 
          disco={disco} 
          onClick={() => alSeleccionar(disco)} 
        />
      ))}
    </div>
  );
}

export default ListaDiscos;