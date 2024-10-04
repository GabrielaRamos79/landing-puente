import React from "react";
import "./Header.css";
import spin from "../../images/details/gif2.png";
import puente from "../../images/details/logopuente_recortado.png";
import yeah from "../../images/details/yeah.png";
import hacemos from "../../images/curvy/quehacemos.png";
import acento from "../../images/details/Acento.png";
// import linea from '../../images/details/Linea.png'

function Header() {
  return (
    <div className="container my-5">
      <header className="App-header">
        <div className="row">
          <div className="vertical-container">
            <h1 className="highlight-text">
              <span className="acento-container">
                <img src={acento} alt="Acento" className="acento-img" />S
              </span>
              omos
            </h1>
            <img src={puente} className="puente-logo" alt="puente-logo" />
          </div>
          <div>
            <img src={spin} className="spin-logo" alt="logo" />
          </div>
        </div>
        <div>
          <div>
            <h2 className="fw-bold">
              tu agencia
              <br />
              de publicidad
              <br />y comunicación 360º
            </h2>
          </div>
        </div>
        <div className="row mt-4">
          {/* Columna izquierda para el texto */}
          <div className="col-md-8">
            <div className="punch">
              <p>
                Hacemos las cosas diferentes desde el otro lado
                del branding: publicidad, branded content, diseño
                y estrategia, ¡con un&nbsp;
                <span className="highlight">
                  <b> punch de flow creativo</b>
                </span>
                !
                Si quieres revolucionar tu marca y llevarla hasta el
                éxito, es el momento de cruzar al otro lado.
                ¿Quieres saber qué podemos hacer por ti?
              </p>
            </div>
          </div>
          {/* Columna derecha para el botón */}
          <div className="col-md-4 d-flex align-items-center">
            <a className="App-link" href="#contactForm">
              ESCRÍBENOS
            </a>
          </div>
        </div>
        <div className="header-grid">
          <div className="left-column">
            <img src={hacemos} className="hacemos" alt="que-hacemos" />
          </div>
          <div className="right-column">
            <img src={yeah} className="yeah" alt="ouh-yeah" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
