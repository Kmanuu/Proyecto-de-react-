import type { Disco } from '../data';
import Etiqueta from './Etiqueta'; // <--- Nuevo
import Like from './Like';         // <--- Nuevo
import './DiscoDetalle.css';

interface DetalleProps {
  disco: Disco | null;
}

function DiscoDetalle({ disco }: DetalleProps) {
  if (!disco) {
    return (
      <div className="detalle-vacio">
        <h2>👈 Selecciona un álbum</h2>
        <p>Toca un disco para ver info o dale al botón de "Añadir".</p>
      </div>
    )
  }

  return (
    <div className="detalle-lleno">
      <div className="fondo-blur" style={{backgroundImage: `url(${disco.portada})`}}></div>
      
      <div className="contenido-real">
        <img src={disco.portada} alt={disco.titulo} className="portada-grande"/>
        <h1>{disco.titulo}</h1>
        <h2>{disco.artista}</h2>
        
        {/* USAMOS LOS NUEVOS COMPONENTES */}
        <div className="chips" style={{display: 'flex', gap: '10px', justifyContent:'center'}}>
          <Etiqueta texto={disco.anio} />
          <Etiqueta texto={disco.genero} color="azul" />
        </div>
        
        <p className="descripcion">{disco.descripcion}</p>
        
        {/* COMPONENTE LIKE */}
        <Like />
      </div>
    </div>
  )
}

export default DiscoDetalle