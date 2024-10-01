import React from "react";
import "./Footer.css";
import puente from "../../images/details/logopuente.png";
import salpicadoazul from "../../images/details/salpicadoazul.png";

function Footer() {
  return (
    <div className="container my-5">
      <footer className="footer-section">
        <div className="social-links">
          <div className="link-container">
            <a
              href="https://www.instagram.com/elpuentebranding/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlighted"
            >
              INSTAGRAM
            </a>
            <div class="circle-border"></div>
          </div>
          <div className="link-container">
            <a
              href="https://www.linkedin.com/company/el-puente-publicidad/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlighted"
            >
              LINKEDIN
            </a>
            <div class="circle-border"></div>
          </div>
          <div className="link-container">
            {/* <div className="vimeo-wrapper"> */}
            <a
              href="https://vimeo.com/elpuentepublicidad"
              target="_blank"
              rel="noopener noreferrer"
              className="highlighted"
            >
              VIMEO
            </a>
            <div class="circle-border"></div>
          </div>
        </div>
        {/* <img
              src={salpicadoazul}
              alt="Salpicado"
              className="splatter-image"
            />
          </div>
        </div> */}
        <div className="legal-links highlighted">
          <div className="link-container">
            <a href="https://www.elpuentepublicidad.com/aviso-legal">
              aviso legal
            </a>
            <div class="circle-border"></div>
          </div>
          <div className="link-container">
            <a href="https://www.elpuentepublicidad.com/politica-de-privacidad">
              política de privacidad
            </a>
            <div class="circle-border"></div>
          </div>
          <div className="link-container">
            <a href="https://www.elpuentepublicidad.com/politica-de-cookies">
              política de cookies
            </a>
            <div class="circle-border"></div>
          </div>
        </div>
        <div className="footer-logo">
          <a
            href="https://www.elpuentepublicidad.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={puente} alt="El Puente Branding Logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
