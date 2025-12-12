import { useState, type ChangeEvent } from 'react';
import { type Camiseta } from '../../data/camisetas';
import './EditarJugador.css';

// 1. IMPORTAMOS EL COMPONENTE Y EL ICONO
import Boton from '../Boton';
import { ShoppingBag } from 'lucide-react';

interface EditarJugadorProps {
    producto: Camiseta;
    onCerrar: () => void;
    onComprar: (talla: string, numero: string, nombre: string) => void; 
}

export default function EditarJugador({ producto, onComprar }: EditarJugadorProps) {
    
    // ESTADOS
    const [tallaSeleccionada, setTallaSeleccionada] = useState('');
    const [dorsal, setDorsal] = useState('');
    const [nombreJugador, setNombreJugador] = useState('');

    // HANDLERS
    const handleDorsalChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.replace(/[^0-9]/g, '');
        if (value.length <= 2) setDorsal(value);
    };

    const handleNombreChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.toUpperCase().replace(/[^A-Z\s]/g, '');
        if (value.length <= 12) setNombreJugador(value);
    };

    const handleComprar = () => {
        if (!tallaSeleccionada) {
            alert("⚠️ Por favor, selecciona una talla primero.");
            return;
        }
        onComprar(tallaSeleccionada, dorsal, nombreJugador);
    };

    return (
        <div className="personalizacion-form">
            <h2 className="modal-equipo">{producto.equipo}</h2>
            <p className="modal-temporada">{producto.temporada}</p>
            <p className="modal-precio">{producto.precio} €</p>
            
            <p className="modal-descripcion">
                {producto.descripcion}
            </p>
            
            <div className="custom-section">
                <h4>SELECCIONA TALLA:</h4>
                <div className="tallas-grid">
                    {producto.tallas.map((talla) => (
                        <button 
                            key={talla}
                            className={`btn-talla ${tallaSeleccionada === talla ? 'selected' : ''}`}
                            onClick={() => setTallaSeleccionada(talla)}
                        >
                            {talla}
                        </button>
                    ))}
                </div>
            </div>

            <div className="custom-section">
                <h4>PERSONALIZACIÓN (OPCIONAL):</h4>
                <div className="personalizacion-fields">
                    <input 
                        type="text" 
                        placeholder="Dorsal" 
                        value={dorsal}
                        onChange={handleDorsalChange}
                        className="custom-input half"
                    />
                    <input 
                        type="text" 
                        placeholder="Nombre" 
                        value={nombreJugador}
                        onChange={handleNombreChange}
                        className="custom-input"
                    />
                </div>
            </div>
            
            {/* 2. AQUÍ USAMOS EL BOTÓN REUTILIZABLE */}
            <div style={{ marginTop: 'auto', display: 'flex' }}>
                <Boton 
                    texto="Añadir a la Cesta" 
                    onClick={handleComprar}
                    variante="primary"
                    icono={ShoppingBag} 
                />
            </div>
        </div>
    );
}