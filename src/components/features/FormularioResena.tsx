import { useState, type ChangeEvent, type FormEvent } from "react";
import "./FormularioResena.css"; 
import Boton from "../Boton"; // Importamos el botón reutilizable

interface FormularioResenaProps {
    onEnviar: (nombre: string, texto: string) => void;
}

export default function FormularioResena({ onEnviar }: FormularioResenaProps) {
    const [nombre, setNombre] = useState("");
    const [comentario, setComentario] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (nombre.trim().length > 0 && comentario.trim().length > 0) {
            onEnviar(nombre.trim(), comentario.trim());
            setNombre("");
            setComentario("");
        }
    }

    function handleTextoChange(e: ChangeEvent<HTMLInputElement>) {
        setNombre(e.currentTarget.value);
    }

    function handleComentarioChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setComentario(e.currentTarget.value);
    }

    return (
        <div className="resena-container">
            <h4> Déjanos un comentario</h4>
            <form onSubmit={handleSubmit} className="resena-form">
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    onChange={handleTextoChange} 
                    required 
                    value={nombre}
                    className="resena-input"
                />
                <textarea 
                    value={comentario} 
                    placeholder="Escribe tu comentario" 
                    onChange={handleComentarioChange}
                    className="resena-textarea"
                    rows={3}
                />
                
                {/* BOTÓN REUTILIZABLE */}
                {/* Nota: Al estar dentro de un form, el clic dispara el onSubmit automáticamente */}
                <div style={{ alignSelf: 'flex-end' }}>
                    <Boton texto="Publicar Reseña" onClick={() => {}} />
                </div>
            </form>
        </div>
    );
}
