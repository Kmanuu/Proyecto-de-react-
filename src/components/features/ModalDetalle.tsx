import { type Camiseta } from '../../data/camisetas';
import './ModalDetalle.css';
import EditarJugador from './EditarJugador'; 
import FormularioResena from './FormularioResena'; 

interface ModalProps {
    producto: Camiseta;
    onCerrar: () => void;
    onComprar: () => void; 
    onAnadirResena: (idProducto: number, usuario: string, comentario: string) => void;
}

export default function ModalDetalle({ producto, onCerrar, onComprar, onAnadirResena }: ModalProps) {
    
    const handleFinalizarCompra = (talla: string, dorsal: string, nombre: string) => {
        const personalizacion = dorsal ? `${dorsal} - ${nombre || '(Sin Nombre)'}` : 'Sin personalizar';
        
        alert(
            `✅ ¡Producto añadido!\n` +
            `Camiseta: ${producto.equipo}\n` +
            `Talla: ${talla}\n` +
            `Personalización: ${personalizacion}`
        );

        onComprar(); 
        onCerrar();
    }

    const handleFondoClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onCerrar();
    };

    return (
        <div className="modal-overlay" onClick={handleFondoClick}>
            <div className="modal-content">
                <button className="close-btn" onClick={onCerrar}>✕</button>

                {/* IZQUIERDA: FOTO */}
                <div className="modal-image-col">
                    <img src={producto.imagen} alt={producto.equipo} />
                </div>

                {/* DERECHA: INFO */}
                <div className="modal-info-col">
                    
                    {/* 1. COMPONENTE DE COMPRA (Usa Boton.tsx internamente) */}
                    <EditarJugador 
                        producto={producto}
                        onCerrar={onCerrar}
                        onComprar={handleFinalizarCompra} 
                    />

                    {/* 2. LISTA DE RESEÑAS */}
                    <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                        <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>
                            Opiniones ({producto.resenas.length})
                        </h4>
                        
                        <div style={{ maxHeight: '150px', overflowY: 'auto', margin: '10px 0' }}>
                            {producto.resenas.length === 0 ? (
                                <p style={{ color: '#999', fontStyle: 'italic', fontSize: '0.9rem' }}>
                                    No hay opiniones. Sé el primero.
                                </p>
                            ) : (
                                producto.resenas.map((r, i) => (
                                    <div key={i} style={{ background: '#f9f9f9', padding: '10px', marginBottom: '8px', borderRadius: '4px' }}>
                                        <strong style={{ fontSize: '0.8rem' }}>{r.usuario}</strong>
                                        <p style={{ margin: '2px 0 0', fontSize: '0.9rem', color: '#555' }}>{r.comentario}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* 3. FORMULARIO DE RESEÑAS (Usa Boton.tsx internamente) */}
                    <FormularioResena 
                        onEnviar={(usuario, texto) => onAnadirResena(producto.id, usuario, texto)} 
                    />

                </div>
            </div>
        </div>
    );
}