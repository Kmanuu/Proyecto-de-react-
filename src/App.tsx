import { useState } from 'react';
import './App.css';

// Importamos los DATOS
import { camisetas as dataInicial, type Camiseta } from './data/camisetas';

// Importamos los COMPONENTES
import Header from './components/layout/Header';
import GridCamisetas from './components/features/GridCamisetas';
import Footer from './components/layout/Footer'; 
import ModalDetalle from './components/features/ModalDetalle'; 

const App = () => {
  // 1. Convertimos los datos fijos en ESTADO para poder modificarlos (añadir reseñas)
  const [productos, setProductos] = useState(dataInicial); 

  // ESTADO COMPARTIDO: El Carrito
  const [carrito, setCarrito] = useState(0);

  // ESTADO VISUAL: ¿Hay una camiseta seleccionada ahora mismo?
  const [productoSeleccionado, setProductoSeleccionado] = useState<Camiseta | null>(null);

  // Callback: Función para sumar al carrito
  const handleAñadirAlCarrito = () => {
    setCarrito(prev => prev + 1);
  };

  // 2. función para guardar la reseña
  const handleAnadirResena = (idProducto: number, usuario: string, comentario: string) => {
    setProductos(prevProductos => 
        prevProductos.map(p => {
            if (p.id === idProducto) {
                // Si encontramos la camiseta, creamos una copia y le añadimos la nueva reseña
                return { ...p, resenas: [...p.resenas, { usuario, comentario }] };
            }
            return p; // Si no es esta, la dejamos igual
        })
    );
  };

  return (
    <div className="app-container">
      
      <Header cantidadCarrito={carrito} />

      <main className="main-content">
        <h2 className="section-title">Últimos Lanzamientos</h2>
        
        {/* Usamos 'productos' (el estado) en vez de 'dataInicial' */}
        <GridCamisetas 
          camisetas={productos} 
          onSeleccionar={(camiseta) => setProductoSeleccionado(camiseta)} 
        />
      </main>

      <Footer />

      {productoSeleccionado && (
        <ModalDetalle 
          // Buscamos el producto en el estado 'productos' 
          // para que si añadimos una reseña, se vea al instante en la lista sin cerrar el modal.
          producto={productos.find(p => p.id === productoSeleccionado.id) || productoSeleccionado}
          
          onCerrar={() => setProductoSeleccionado(null)}
          onComprar={handleAñadirAlCarrito}
          
     
          onAnadirResena={handleAnadirResena} 
        />
      )}

    </div>
  );
};

export default App;
