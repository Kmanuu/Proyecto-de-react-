import { useState } from 'react';
import type { Disco } from '../data';
import './Formulario.css';
import Boton from './Boton';

interface FormProps {
  // Función que nos pasa el padre para entregarle el disco nuevo
  alGuardar: (nuevoDisco: Disco) => void; 
  
}

interface DatosFormulario {
  titulo: string;
  artista: string;
  anio: number;
  genero: string;
  descripcion: string;
  portada: string;
}

export default function Formulario({ alGuardar }: FormProps) {
  
  // 1. EL ESTADO (La Memoria del Formulario)
  // Guardamos todos los campos en un solo objeto para no tener 6 variables sueltas.
  const [datos, setDatos ] = useState<DatosFormulario>({ 
    titulo: '',
    artista: '',
    anio: 2024,
    genero: '',
    descripcion: '',
    portada: ''
  });

  // 2.Una función para gobernarlos a todos
  // En vez de hacer un onChange para cada input, usamos el "name" del input.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDatos({
      ...datos, // Mantengo los otros datos
      [name]: value // Actualiza SOLO el campo que ha cambiado (ej: "titulo": "M")
    });
  };

  // 3. EL ENVÍO (Cuando pulsas "Guardar")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // IMPORTANTE: Evita que la página se recargue (lo típico de HTML viejo)

    // Creamos el objeto Disco final
    const nuevoDisco: Disco = {
      id: Date.now(), // Truco sucio: usamos la hora actual como ID único
      ...datos,      // Copiamos título, artista, etc.
      // Si no puso foto, ponemos una por defecto
      portada: datos.portada || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/12in-Vinyl-LP-Record-Angle.jpg/330px-12in-Vinyl-LP-Record-Angle.jpg' 
    };

    // ¡Se lo enviamos al Jefe (App)!
    alGuardar(nuevoDisco);

    // Limpiamos el formulario
    setDatos({
      titulo: '', artista: '', anio: 2024, genero: '', descripcion: '', portada: ''
    });
  };

  return (
    <form className="formulario-disco" onSubmit={handleSubmit}>
      <h2>💿 Añadir Nuevo Disco</h2>

      <div className="campo">
        <label>Título:</label>
        <input 
          type="text" 
          name="titulo"           // IMPORTANTE: Debe coincidir con el estado
          value={datos.titulo}    // CONTROLADO: React decide qué pone aquí
          onChange={handleChange} // CONTROLADO: React escucha cambios
          required 
        />
      </div>

      <div className="fila-doble">
        <div className="campo">
          <label>Artista:</label>
          <input type="text" name="artista" value={datos.artista} onChange={handleChange} required />
        </div>
        <div className="campo">
          <label>Año:</label>
          <input type="number" name="anio" value={datos.anio} onChange={handleChange} required />
        </div>
      </div>

      <div className="campo">
        <label>Género:</label>
        <input type="text" name="genero" value={datos.genero} onChange={handleChange} />
      </div>

      <div className="campo">
        <label>URL Portada (Imagen):</label>
        <input type="text" name="portada" value={datos.portada} onChange={handleChange} placeholder="https://..." />
      </div>

      <div className="campo">
        <label>Descripción:</label>
        <textarea name="descripcion" value={datos.descripcion} onChange={handleChange} rows={3} />
      </div>

      <div style={{ marginTop: '20px' }}>
  <Boton 
    texto="Guardar Disco" 
    tipo="submit"  
  />
</div>
    </form>
  );
}