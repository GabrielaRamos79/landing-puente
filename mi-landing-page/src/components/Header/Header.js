import React from "react";
import "./Header.css";
import logo from "./images/gif2.png";
import puente from "./images/logopuente.png";
import yeah from "./images/yeah.png";

function Header() {
  return (
    <div className="container my-5">
      <header className="App-header text-center">
        <div className="row">
          <div className="col-md-6 text-start">
            <h1 className="highlight-text mb-4">
              <span className="rayo"></span>
              Somos
              <img
                src={puente}
                className="puente-logo mb-2"
                alt="puente-logo"
              />
            </h1>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12 text-end d-flex justify-content-end align-items-start">
            <h2 className="fw-bold">
              tu agencia
              <br />
              de publicidad
              <br />y comunicación 360º
            </h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md9 text-start d-flex flex-column justify-content-center">
            <p>
              Hacemos las cosas diferentes desde el otro lado
              <br />
              del branding: publicidad, branded content, diseño
              <br />y estrategia, ¡con un{" "}
              <span className="highlight">
                <b>punch de flow creativo</b>
              </span>
              !<br />
            </p>
            <p>
              Si quieres revolucionar tu marca y llevarla hasta el<br></br>
              éxito, es el momento de cruzar al otro lado.
              <br />
            </p>
            <p>¿Quieres saber qué podemos hacer por ti?</p>
            <div className="col-md-4 d-flex"></div>
            <a
              className="App-link"
              href="https://elpuentepublicidad.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ESCRÍBENOS
            </a>
          </div>
        </div>
        <img src={yeah} className="yeah" alt="ouh-yeah" />
      </header>
    </div>
  );
}

export default Header;
