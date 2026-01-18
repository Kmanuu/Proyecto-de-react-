import type { Disco } from '../data';
import './DiscoDetalle.css';
import Etiqueta from './Etiqueta';
import Like from './Like';


interface DetalleProps {
  disco: Disco | null; // Puede ser un Disco O ser null (nada)
}

export default function DiscoDetalle({ disco }: DetalleProps) {
  
  // 1. EL GUARDIA DE SEGURIDAD
  // Si disco es "falso" (null), cortamos aquí y devolvemos un mensaje.
  if (!disco) {
    return (
      <div className="detalle-vacio">
        <p>👈 Selecciona un álbum de la lista para ver los detalles</p>
      </div>
    );
  }

  // 2. LA ZONA VIP (Si llegamos aquí, es que HAY disco seguro)
  return (
    <div className="detalle-lleno">
      
      {/* TRUCO VISUAL: Fondo borroso con la misma imagen */}
      <div 
        className="fondo-blur" 
        style={{ backgroundImage: `url(${disco.portada})` }} 
      />

      <div className="contenido-real">
        {/* Imagen Principal */}
        <img src={disco.portada} alt={disco.titulo} className="portada-grande"/>

        {/* Textos Principales */}
        <h1>{disco.titulo}</h1>
        <h2 className="artista-subtitulo">{disco.artista}</h2>

        {/* ZONA DE ETIQUETAS (Usamos el componente reutilizable) */}
        {/* Fíjate: pasamos el dato en la prop "texto" */}
        <div className="lista-etiquetas">
          <Etiqueta texto={disco.anio} />
          <Etiqueta texto={disco.genero} color="azul" />
        </div>

        {/* Descripción */}
        <p className="descripcion">
          {disco.descripcion}
        </p>

        {/* ZONA DE LIKE (El Like egoísta) el otro componente utilizable */}
        <div className="zona-acciones">
           <Like />
        </div>

      </div>
    </div>
  );
  
}
