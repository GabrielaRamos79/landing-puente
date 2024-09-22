import React from "react";
import "./Client.css";
import LesRoches from "../../images/logos/LesRoches.png";
import Luxudise from "../../images/logos/Luxudise.png";
import Malaga from "../../images/logos/Malaga.png";
import Porshe from "../../images/logos/Porsche.png";
import Qipro from "../../images/logos/Qipro.png";
import Supermex from "../../images/logos/Supermex.png";
import Mediamaraton from "../../images/logos/Mediamaraton.png";
import Alma from "../../images/logos/Alma.png";
import Alabardero from "../../images/logos/Alabardero.png";
import Segurestil from "../../images/logos/Segurestil.png";

function Client() {
  return (
    <div className="container my-5">
      <section className="section-clients mt-5">
        <div className="container text-center">
          <div className="row d-flex justify-content-around mt-5">
            {/* Primera fila de logos */}
            <div className="client-row col-md-2 col-sm-6 mb-4">
              <img
                src={LesRoches}
                alt="Les Roches"
                className="img-fluid client-logo"
              />
            </div>
            <div className="col-md-2 col-sm-6 mb-4">
              <img
                src={Luxudise}
                alt="Luxudise"
                className="img-fluid client-logo"
              />
            </div>
            <div className="col-md-2 col-sm-6 mb-4">
              <img
                src={Malaga}
                alt="Málaga"
                className="img-fluid client-logo"
              />
            </div>
            <div className="col-md-2 col-sm-6 mb-4">
              <img
                src={Porshe}
                alt="Porshe"
                className="porshe-client img-fluid client-logo"
              />
            </div>
            <div className="col-md-2 col-sm-6 mb-4">
              <img src={Qipro} alt="Qipro" className="img-fluid client-logo" />
            </div>
          </div>
          <div className="row d-flex justify-content-around mt-5">
            {/* Segunda fila de logos */}
            <div className="client-row col-md-2 col-sm-6 mb-4">
              <img
                src={Supermex}
                alt="Super Mex"
                className="img-fluid client-logo"
              />
            </div>
            <div className="col-md-2 col-sm-6 mb-4">
              <img
                src={Mediamaraton}
                alt="Media Maraton"
                className="img-fluid client-logo"
              />
            </div>
            <div className="col-md-2 col-sm-6 mb-4">
              <img src={Alma} alt="Alma" className="img-fluid client-logo" />
            </div>
            <div className="col-md-2 col-sm-6 mb-4">
              <img
                src={Alabardero}
                alt="Alarbadero"
                className="alarbadero-client img-fluid client-logo"
              />
            </div>
            <div className="col-md-2 col-sm-6 mb-4">
              <img
                src={Segurestil}
                alt="Segurestil"
                className="img-fluid client-logo"
              />
            </div>
          </div>
          {/* Texto final con el botón */}
          <div className="row mt-5">
            <div className="col text-center grid-container">
              <p className="quieres">¿Quieres ser una de ellas?</p>
              <a href="#contactForm" className="btn-yes">
                YES!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;
