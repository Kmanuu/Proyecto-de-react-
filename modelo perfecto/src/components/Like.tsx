import { useState } from 'react';
import './Like.css';

function Like() {
  // Estado local: Solo le importa a este componente
  const [likes, setLikes] = useState(0);
  const [pulsado, setPulsado] = useState(false);

  const darLike = () => {
    if (pulsado) {
      setLikes(likes - 1); // Quitar like
      setPulsado(false);
    } else {
      setLikes(likes + 1); // Dar like
      setPulsado(true);
    }
  };

  return (
    <button 
      className={`btn-like ${pulsado ? 'activo' : ''}`} 
      onClick={darLike}
    >
      ♥ {likes}
    </button>
  );
}

export default Like;