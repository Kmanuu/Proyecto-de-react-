import { useState } from "react";
import './Like.css'; 

function LikesButton() {
    // 1. ESTADO: Empieza en 0
    const [likes, setLikes] = useState(0);

    // 2. FUNCIÓN: Suma 1 cada vez que tocas
    function handleClick() {
        setLikes(likes + 1);
    }

    // 3. RENDER: Botón con el número de likes
    return (
        <button className="boton-like-profe" onClick={handleClick}>
            {likes} 👍
        </button>
    )
}

export default LikesButton;