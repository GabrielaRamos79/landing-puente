import React from "react";
import "./Services.css";
import hacemos from "../../images/curvy/quehacemos.png";
import marca from "../../images/curvy/marca.png";
import digital from "../../images/curvy/digital.png";
import media from "../../images/curvy/media.png";
import branding from "../../images/curvy/branding.png";
import web from "../../images/curvy/web.png";
import audiovisual from "../../images/curvy/audiovisual.png";
import alotrolado from "../../images/curvy/alotrolado.png";
import flechaizq from "../../images/details/flechaizq.png";

function Services() {
  return (
    <section className="services-section mt-5">
      <img src={hacemos} className="hacemos" alt="que-hacemos" />
      <div className="container">
        <div className="row">
          {/* Primera fila */}
          <div className="col-md-4">
            <h3>
              ESTRATEGIA DE <img src={marca} className="curvy" alt="marca" />
            </h3>
            <ul>
              <li>Consultoría estratégica de comunicación</li>
              <li>Auditoría de marca</li>
              <li>Plan integral de marketing</li>
              <li>Investigación de mercado</li>
              <li>Campañas publicitarias</li>
              <li>Gabinete de comunicación</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>
              ESTRATEGIA <img src={digital} className="curvy" alt="digital" />
            </h3>
            <ul>
              <li>Search Engine Optimization (SEO)</li>
              <li>Search Engine Marketing (SEM)</li>
              <li>Social Media Optimization (SMO)</li>
              <li>Inbound marketing</li>
              <li>Reputación online</li>
              <li>Programática</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>
              SOCIAL <img src={media} className="curvy" alt="media" />
            </h3>
            <ul>
              <li>Gestión de redes sociales</li>
              <li>Estrategia de contenidos</li>
              <li>Social Ads</li>
              <li>Gestión de influencers</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          {/* Segunda fila */}
          <div className="col-md-4">
            <h3>
              <img src={branding} className="curvy" alt="branding" />
            </h3>
            <ul>
              <li>Identidad corporativa</li>
              <li>Identidad verbal</li>
              <li>Identidad sensorial</li>
              <li>Identidad actitudinal</li>
              <li>Manual de identidad de marca</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>
              DESARROLLO <img src={web} className="curvy" alt="web" />
            </h3>
            <ul>
              <li>Consultoría web</li>
              <li>Diseño y desarrollo</li>
              <li>Arquitectura de la información</li>
              <li>Experiencia de usuario</li>
              <li>Gestión y mantenimiento</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>
              PRODUCCION{" "}
              <img src={audiovisual} className="curvy" alt="audiovisual" />
            </h3>
            <ul>
              <li>Spot</li>
              <li>Vídeo corporativo</li>
              <li>Vídeo marketing</li>
              <li>Motion graphics</li>
              <li>Locución y cuñas de radio</li>
              <li>Gabinete de comunicación</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <h1 className="cruzado">MIRA QUIÉN HA CRUZADO YA</h1>
        <img src={alotrolado} className="otrolado" alt="alotrolado" />
        <h3 className="telita">
          TELITAAAA
          <img src={flechaizq} className="flecha" alt="flecha" />
        </h3>
      </div>
    </section>
  );
}

export default Services;
