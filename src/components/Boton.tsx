import { type LucideIcon } from 'lucide-react';
import './Boton.css';

interface BotonProps {
  texto: string;
  onClick: () => void;
  variante?: 'primary' | 'secondary' | 'danger';
  // 2. Usamos LucideIcon aquí
  icono?: LucideIcon;
}

export default function Boton({ texto, onClick, variante = 'primary', icono: Icono }: BotonProps) {
  const claseBoton = `btn btn-${variante}`;

  return (
    <button 
      className={claseBoton} 
      onClick={onClick}
    >
      {/* 3. Renderizado condicional */}
      {Icono && <Icono size={16} />} 
      {texto}
    </button>
  );
}