import { useState } from 'react';
import Boton from './Boton';
import './Formulario.css';
import type { Disco } from '../data';

interface FormProps {
  alGuardar: (nuevoDisco: Disco) => void;
}

function Formulario({ alGuardar }: FormProps) {
  // 1. Estados para los inputs
  const [titulo, setTitulo] = useState('');
  const [artista, setArtista] = useState('');
  const [img, setImg] = useState('');

  // 2. Función al enviar
  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que recargue la página

    // Creamos el objeto del nuevo disco
    const nuevo = {
      id: Date.now(), // Truco: usamos la hora actual como ID único
      titulo: titulo,
      artista: artista,
      anio: 2024, // Por defecto
      genero: "Nuevo",
      portada: img || "https://via.placeholder.com/300", // Foto por defecto si no pone nada
      descripcion: "Disco añadido por el usuario."
    };

    alGuardar(nuevo); // ¡Se lo mandamos a App!
  };

  return (
    <div className="form-container">
      <h2>📀 Añadir Nuevo Disco</h2>
      <form onSubmit={manejarEnvio}>
        <input 
          type="text" 
          placeholder="Título del Álbum" 
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Artista" 
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="URL de la Portada (Imagen)" 
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        
        <Boton texto="Guardar Disco" tipo="submit" />
      </form>
    </div>
  );
}

export default Formulario;