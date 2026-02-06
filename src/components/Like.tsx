import React, { useState } from "react";
import "./Like.css";

export default function BotonCorazon() {
    const [deseado, setDeseado] = useState(false);

    function handleClick(e: React.MouseEvent) {
        // ESTO ES LA CLAVE: Evita que el clic "atraviese" el botón 
        // y active el onClick de la tarjeta (abriendo el modal sin querer)
        e.stopPropagation(); 
        setDeseado(!deseado);
    }

    return (
        <button 
            className={`corazon-boton ${deseado ? 'activo' : ''}`} 
            onClick={handleClick}
        >
            {deseado ? "❤️" : "🤍"} 
        </button>
    );
}