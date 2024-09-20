import React from "react";
import './Footer.css';
import puente from '../../images/details/logopuente.png'
import salpicadoazul from '../../images/details/salpicadoazul.png'

function Footer(){
    return (
        <footer className="footer-section">
      <div className="social-links">
        <a href="https://www.instagram.com/elpuentebranding/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        <a href="https://www.linkedin.com/company/el-puente-publicidad/" target="_blank" rel="noopener noreferrer" className="highlighted">LINKEDIN</a>
        <div className="vimeo-wrapper">
          <a href="https://vimeo.com/elpuentepublicidad" target="_blank" rel="noopener noreferrer">VIMEO</a>
          <img src={salpicadoazul} alt="Salpicado" className="splatter-image" />
        </div>
      </div>
      <div className="legal-links">
        <a href="https://www.elpuentepublicidad.com/aviso-legal">aviso legal</a>
        <a href="https://www.elpuentepublicidad.com/politica-de-privacidad">política de privacidad</a>
        <a href="https://www.elpuentepublicidad.com/politica-de-cookies">política de cookies</a>
      </div>
      <div className="footer-logo">
        <a href='https://www.elpuentepublicidad.com/' target="_blank" rel="noopener noreferrer">
          <img src={puente} alt="El Puente Branding Logo" />
        </a>
      </div>
    </footer>
    );
}
export default Footer;