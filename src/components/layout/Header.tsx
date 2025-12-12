import { ShoppingBag, Menu, Search, User } from 'lucide-react';
import './Header.css';

// Definimos qué props necesita este componente
interface HeaderProps {
  cantidadCarrito: number; // El número que viene desde App.tsx
}

export default function Header({ cantidadCarrito }: HeaderProps) {
  
  // Lista de datos para no repetir código
  const botonesIzquierda = [
    { id: 'menu', icono: Menu },
    { id: 'buscar', icono: Search }
  ];

  return (
    <header className="header">
      {/* 1. IZQUIERDA: Mapeamos los iconos genéricos */}
      <div className="header-group">
        {botonesIzquierda.map((btn) => (
          <button key={btn.id} className="icon-btn">
            <btn.icono size={24} strokeWidth={1.5} />
          </button>
        ))}
      </div>

      {/* 2. CENTRO: La Marca */}
      <div className="header-brand">
        RETROGOL
      </div>

      {/* 3. DERECHA: Login y Carrito (Este es especial por el badge) */}
      <div className="header-group right">
        <button className="icon-btn">
            <User size={24} strokeWidth={1.5} />
        </button>

        <button className="icon-btn relative">
          <ShoppingBag size={24} strokeWidth={1.5} />
          {/* Aquí mostramos el número que nos pasa el PADRE (App) */}
          <span className="badge">{cantidadCarrito}</span>
        </button>
      </div>
    </header>
  );
}