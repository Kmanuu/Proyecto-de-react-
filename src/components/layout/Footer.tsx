import './Footer.css';

// Componente sin ninguna Prop, recibe información estática
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>RETROGOL</h4>
          <p>Pasión por el fútbol clásico.</p>
        </div>
        <div className="footer-section">
          <h4>Colecciones</h4>
          <ul>
            <li>Retro Archive</li>
            <li>Nuevas Llegadas</li>
            <li>Ediciones Especiales</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Términos y Condiciones</li>
            <li>Política de Privacidad</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Retrogol. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}