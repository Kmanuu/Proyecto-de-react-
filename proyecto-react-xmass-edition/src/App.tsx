import './App.css'
// 1. Importamos el header
import HeaderAlbum from './components/Header'

function App() {
  return (
    <div className="app-container">
       {/* 2. Aquí renderizamos el Header */}
       <HeaderAlbum />

       {/* 3. Preparamos el esqueleto de dos columnas para el futuro */}
       <main className="main-content">
          
          {/* COLUMNA IZQUIERDA: Aquí irán tus Discos */}
          <section className="left-panel">
            <h2>🎵 Mi Colección</h2>
            <div className="caja-vacia">
              Aquí cargaremos la lista de discos...
            </div>
          </section>

          {/* COLUMNA DERECHA: Aquí irán los Detalles */}
          <section className="right-panel">
            <h2>📋 Detalles</h2>
            <div className="caja-vacia">
              Selecciona un disco para ver la info...
            </div>
          </section>

       </main>
    </div>
  )
}

export default App