import { useState } from 'react';
import './App.css';
import HeaderAlbum from './components/Header';
import ListaDiscos from './components/ListaDiscos'; // <--- Usamos la lista nueva
import DiscoDetalle from './components/DiscoDetalle';
import Formulario from './components/Formulario';   // <--- Usamos formulario
import Boton from './components/Boton';             // <--- Usamos botón
import { discosData } from './data'; 
import type { Disco } from './data';

function App() {
  // ESTADO 1: La lista de discos (ahora puede crecer)
  const [misDiscos, setMisDiscos] = useState<Disco[]>(discosData);
  
  // ESTADO 2: El disco seleccionado
  const [seleccionado, setSeleccionado] = useState<Disco | null>(null);

  // ESTADO 3: ¿Estamos viendo el formulario?
  const [modoFormulario, setModoFormulario] = useState(false);

  // FUNCIÓN: Añadir disco nuevo (se la pasamos al Formulario)
  const agregarDisco = (nuevoDisco: Disco) => {
    setMisDiscos([...misDiscos, nuevoDisco]); // Añadimos al array
    setModoFormulario(false); // Cerramos el formulario
    setSeleccionado(nuevoDisco); // Seleccionamos el nuevo
  };

  return (
    <div className="app-container">
       <HeaderAlbum />

       <main className="main-content">
          
          {/* COLUMNA IZQUIERDA */}
          <section className="left-panel">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: '10px'}}>
               <h2>🎵 Biblioteca</h2>
               {/* Botón para abrir el formulario */}
               <Boton 
                 texto="Añadir +" 
                 secundario 
                 onClick={() => {
                   setModoFormulario(true);
                   setSeleccionado(null);
                 }} 
               />
            </div>

            {/* Componente Lista */}
            <ListaDiscos 
              discos={misDiscos} 
              alSeleccionar={(disco) => {
                setSeleccionado(disco);
                setModoFormulario(false);
              }} 
            />
          </section>

          {/* COLUMNA DERECHA (RENDERIZADO CONDICIONAL) */}
          <section className="right-panel">
             {modoFormulario ? (
               // Si modoFormulario es true, mostramos el Form
               <Formulario alGuardar={agregarDisco} />
             ) : (
               // Si no, mostramos el Detalle
               <DiscoDetalle disco={seleccionado} />
             )}
          </section>

       </main>
    </div>
  )
}

export default App;