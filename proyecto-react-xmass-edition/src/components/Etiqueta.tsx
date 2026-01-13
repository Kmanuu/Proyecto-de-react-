import './Etiqueta.css';

interface EtiquetaProps {
  texto: string | number;   // Acepta texto ("Pop") o números (1982)
  esAzul?: boolean;         // Opcional: ¿La quieres azul o normal?
}

function Etiqueta({ texto, esAzul }: EtiquetaProps) { // Recibe las propiedades de la interfaz 
  return (
    // Si 'esAzul' es true, añade la clase "azul", si no, usa "gris"
    <span className={`etiqueta ${esAzul ? 'azul' : 'gris'}`}>
      {texto}
    </span>
  );
}

export default Etiqueta;