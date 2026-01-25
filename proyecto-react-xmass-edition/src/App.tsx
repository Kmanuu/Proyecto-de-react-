import { useState } from 'react';
import './App.css';


// COMPONENTES
import { discos as datosIniciales, type Disco } from './data';
import ListaDiscos from './components/ListaDiscos';
import DiscoDetalle from './components/DiscoDetalle';
import Formulario from './components/Formulario';
import Boton from './components/Boton';

function App() {
  
  // --- 1. ESTADOS ---
  const [misDiscos, setMisDiscos] = useState<Disco[]>(datosIniciales);
  const [discoActivo, setDiscoActivo] = useState<Disco | null>(null);
  const [viendoFormulario, setViendoFormulario] = useState(false);

  // --- 2. FUNCIONES ---
  const manejarSeleccion = (disco: Disco) => {
    setDiscoActivo(disco);
    setViendoFormulario(false);
  };

  const abrirFormulario = () => {
    setDiscoActivo(null);
    setViendoFormulario(true);
  };

  const guardarNuevoDisco = (nuevo: Disco) => {
    setMisDiscos([...misDiscos, nuevo]);
    setViendoFormulario(false);
    setDiscoActivo(nuevo);
  };

  // --- 3. EL DISEÑO ---
  return (
    <div className="app-container">
      
      {/* Contenedor principal flex */}
      <div className="main-content">
        
        {/* PANEL IZQUIERDO (33%) */}
        <aside className="left-panel">
          
          {/* Cabecera pequeña dentro del panel */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h2 style={{ margin: 0 }}>🎵 Biblioteca</h2>
            <Boton texto="+" onClick={abrirFormulario} tipo="button" />
          </div>

          {/* Zona con Scroll para la lista */}
          <div className="lista-scroll">
            <ListaDiscos 
              discos={misDiscos} 
              alSeleccionar={manejarSeleccion} 
            />
          </div>
        </aside>

        {/* PANEL DERECHO (66%) */}
        <main className="right-panel">
          {viendoFormulario ? (
            <Formulario alGuardar={guardarNuevoDisco} />
          ) : (
            <DiscoDetalle disco={discoActivo} />
          )}
        </main>

      </div>
    </div>
  );
}

export default App;