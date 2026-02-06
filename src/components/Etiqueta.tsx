import './Etiqueta.css';

interface EtiquetaProps {
  texto: string | number; // Puede ser texto o número
  color?: 'azul' | 'gris'; // Opcional: para variar estilo
}

function Etiqueta({ texto, color = 'gris' }: EtiquetaProps) {
  return (
    <span className={`etiqueta ${color}`}>
      {texto}
    </span>
  );
}

export default Etiqueta;