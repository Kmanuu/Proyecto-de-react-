import './Boton.css';

interface BotonProps {
  texto: string;
  onClick?: () => void; // Función opcional al hacer clic
  tipo?: 'button' | 'submit'; // Para saber si es de formulario
  secundario?: boolean; // Para cambiarle el color si queremos
}

function Boton({ texto, onClick, tipo = 'button', secundario }: BotonProps) {
  return (
    <button 
      className={`btn-pro ${secundario ? 'secundario' : 'primario'}`} 
      onClick={onClick}
      type={tipo}
    >
      {texto}
    </button>
  );
}

export default Boton;