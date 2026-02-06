import './Boton.css';

interface BotonProps {
  texto: string;            // Lo que pone dentro ("Guardar", "Borrar")
  onClick?: () => void;     // Una función para ejecutar cuando le den clic
  esSecundario?: boolean;   // Igual que 'esAzul': ¿Es el botón principal o el secundario?
  tipo?: "button" | "submit"; // Para saber si es botón normal o de formulario (por defecto es "normal")
}

function Boton({ texto, onClick, esSecundario, tipo = "button" }: BotonProps) {
  return (
    <button 
      // Si esSecundario es true, pone clase "secundario", si no "primario"
      className={`mi-boton ${esSecundario ? 'secundario' : 'primario'}`}
      onClick= // enchufe de la pared
      {onClick} // Es el cable de la lámpara
      type={tipo}
    >
      {texto}
    </button>
  );
}

export default Boton;