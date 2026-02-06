import './Header.css';

function HeaderAlbum() {
  return (
    // 1. El contenedor principal (la tira negra)
    <header className="header-principal">
      
      {/* 2. ZONA IZQUIERDA: Identidad de la web */}
      <div className="logo-titulo">
        <h1>🎵 KairoAlbum</h1> 
      </div>

      {/* 3. ZONA DERECHA: Info de usuario */}
      <div className="info-usuario">
        <span>Bienvenido, <strong>Manu</strong></span>
      </div>

    </header>
  )
}

export default HeaderAlbum