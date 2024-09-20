import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Client from './components/Client/Client';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import Project from './components/Project/Project';
import Services from './components/Services/Services';

import logo from "./images/details/gif2.png";
import puente from "./images/details/logopuente.png";
import yeah from "./images/details/yeah.png";
import hacemos from "./images/curvy/quehacemos.png";
import marca from "./images/curvy/marca.png";
import digital from "./images/curvy/digital.png";
import media from "./images/curvy/media.png";
import branding from "./images/curvy/branding.png";
import web from "./images/curvy/web.png";
import audiovisual from "./images/curvy/audiovisual.png";
import alotrolado from "./images/curvy/alotrolado.png";
import flechaizq from "./images/details/flechaizq.png";
import LesRoches from "./images/logos/LesRoches.png";
import Luxudise from "./images/logos/Luxudise.png";
import Malaga from "./images/logos/Malaga.png";
import Porshe from "./images/logos/Porsche.png";
import Qipro from "./images/logos/Qipro.png";
import Supermex from "./images/logos/Supermex.png";
import Mediamaraton from "./images/logos/Mediamaraton.png";
import Alma from "./images/logos/Alma.png";
import Alabardero from "./images/logos/Alabardero.png";
import Segurestil from "./images/logos/Segurestil.png";
import gepro from "./images/proyectos/gepro.png";
import supermexpro from "./images/proyectos/supermexpro.png";
import montosapro from "./images/proyectos/montosapro.png";
import lesrochespro from "./images/proyectos/lesrochespro.png";
import almapro from "./images/proyectos/almapro.png";
import porshepro from "./images/proyectos/porshepro.png";
import mas from "./images/details/mas.png";
import linea from "./images/details/Linea.png";
import estrella from "./images/details/estrella.png";
import gepopup from "./images/proyectos/gepopup.png";
import textura2 from "./images/details/textura2.png";
import flecha from "./images/details/Flecha.png";
import salpicadoazul from "./images/details/salpicadoazul.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";

function App() {
  // const [showPopup, setShowPopup] = useState(false);
  // const [currentImage, setCurrentImage] = useState(null);

  // const handleImageClick = (image) => {
  //   setCurrentImage(image);
  //   setShowPopup(true);
  // };

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  //   setCurrentImage(null);
  // };
  return (
    <div className="App">
      <Header />
      <Services />
      <ContactForm />
      <Footer />
      <Contact />
      <Client />
      <Proyectos />
      <Carousel />
    </div>
    // <div className="container my-5">
    //   <header className="App-header text-center">
    //     <div className="row">
    //       <div className="col-md-6 text-start">
    //         <h1 className="highlight-text mb-4">
    //           <span className="rayo"></span>
    //           Somos
    //           <img
    //             src={puente}
    //             className="puente-logo mb-2"
    //             alt="puente-logo"
    //           />
    //         </h1>
    //       </div>
    //       <div className="col-md-6 d-flex justify-content-center align-items-center">
    //         <img src={logo} className="App-logo" alt="logo" />
    //       </div>
    //     </div>
    //     <div className="row mt-2">
    //       <div className="col-md-12 text-end d-flex justify-content-end align-items-start">
    //         <h2 className="fw-bold">
    //           tu agencia
    //           <br />
    //           de publicidad
    //           <br />y comunicación 360º
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="row mt-4">
    //       <div className="col-md9 text-start d-flex flex-column justify-content-center">
    //         <p>
    //           Hacemos las cosas diferentes desde el otro lado
    //           <br />
    //           del branding: publicidad, branded content, diseño
    //           <br />y estrategia, ¡con un{" "}
    //           <span className="highlight">
    //             <b>punch de flow creativo</b>
    //           </span>
    //           !<br />
    //         </p>
    //         <p>
    //           Si quieres revolucionar tu marca y llevarla hasta el<br></br>
    //           éxito, es el momento de cruzar al otro lado.
    //           <br />
    //         </p>
    //         <p>¿Quieres saber qué podemos hacer por ti?</p>
    //         <div className="col-md-4 d-flex"></div>
    //         <a
    //           className="App-link"
    //           href="https://elpuentepublicidad.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           ESCRÍBENOS
    //         </a>
    //       </div>
    //     </div>
    //     <img src={yeah} className="yeah" alt="ouh-yeah" />
    //     <img src={hacemos} className="hacemos" alt="que-hacemos" />
    //   </header>
      // {/* Nueva sección para la parte de los servicios */}
      // <section className="services-section mt-5">
      //   <div className="container">
      //     <div className="row">
      //       {/* Primera fila */}
      //       <div className="col-md-4">
      //         <h3>
      //           ESTRATEGIA DE <img src={marca} className="curvy" alt="marca" />
      //         </h3>
      //         <ul>
      //           <li>Consultoría estratégica de comunicación</li>
      //           <li>Auditoría de marca</li>
      //           <li>Plan integral de marketing</li>
      //           <li>Investigación de mercado</li>
      //           <li>Campañas publicitarias</li>
      //           <li>Gabinete de comunicación</li>
      //         </ul>
      //       </div>
      //       <div className="col-md-4">
      //         <h3>
      //           ESTRATEGIA <img src={digital} className="curvy" alt="digital" />
      //         </h3>
      //         <ul>
      //           <li>Search Engine Optimization (SEO)</li>
      //           <li>Search Engine Marketing (SEM)</li>
      //           <li>Social Media Optimization (SMO)</li>
      //           <li>Inbound marketing</li>
      //           <li>Reputación online</li>
      //           <li>Programática</li>
      //         </ul>
      //       </div>
      //       <div className="col-md-4">
      //         <h3>
      //           SOCIAL <img src={media} className="curvy" alt="media" />
      //         </h3>
      //         <ul>
      //           <li>Gestión de redes sociales</li>
      //           <li>Estrategia de contenidos</li>
      //           <li>Social Ads</li>
      //           <li>Gestión de influencers</li>
      //         </ul>
      //       </div>
      //     </div>

          // <div className="row mt-5">
            // {/* Segunda fila */}
      //       <div className="col-md-4">
      //         <h3>
      //           <img src={branding} className="curvy" alt="branding" />
      //         </h3>
      //         <ul>
      //           <li>Identidad corporativa</li>
      //           <li>Identidad verbal</li>
      //           <li>Identidad sensorial</li>
      //           <li>Identidad actitudinal</li>
      //           <li>Manual de identidad de marca</li>
      //         </ul>
      //       </div>
      //       <div className="col-md-4">
      //         <h3>
      //           DESARROLLO <img src={web} className="curvy" alt="web" />
      //         </h3>
      //         <ul>
      //           <li>Consultoría web</li>
      //           <li>Diseño y desarrollo</li>
      //           <li>Arquitectura de la información</li>
      //           <li>Experiencia de usuario</li>
      //           <li>Gestión y mantenimiento</li>
      //         </ul>
      //       </div>
      //       <div className="col-md-4">
      //         <h3>
      //           PRODUCCION{" "}
      //           <img src={audiovisual} className="curvy" alt="audiovisual" />
      //         </h3>
      //         <ul>
      //           <li>Spot</li>
      //           <li>Vídeo corporativo</li>
      //           <li>Vídeo marketing</li>
      //           <li>Motion graphics</li>
      //           <li>Locución y cuñas de radio</li>
      //           <li>Gabinete de comunicación</li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="col-md-9">
      //     <h1 className="cruzado">MIRA QUIÉN HA CRUZADO YA</h1>
      //     <img src={alotrolado} className="otrolado" alt="alotrolado" />
      //     <h3 className="telita">
      //       TELITAAAA
      //       <img src={flechaizq} className="flecha" alt="flecha" />
      //     </h3>
      //   </div>
      // </section>
      // <section className="section-clients mt-5">
      //   <div className="container text-center">
      //     <div className="row d-flex justify-content-between mt-5">
            // {/* Primera fila de logos */}
          //   <div className="col-md-2 col-sm-6 mb-4">
          //     <img
          //       src={LesRoches}
          //       alt="Les Roches"
          //       className="img-fluid client-logo"
          //     />
          //   </div>
          //   <div className="col-md-2 col-sm-6 mb-4">
          //     <img
          //       src={Luxudise}
          //       alt="Luxudise"
          //       className="img-fluid client-logo"
          //     />
          //   </div>
          //   <div className="col-md-2 col-sm-6 mb-4">
          //     <img
          //       src={Malaga}
          //       alt="Málaga"
          //       className="img-fluid client-logo"
          //     />
          //   </div>
          //   <div className="col-md-2 col-sm-6 mb-4">
          //     <img
          //       src={Porshe}
          //       alt="Porshe"
          //       className="img-fluid client-logo"
          //     />
          //   </div>
          //   <div className="col-md-2 col-sm-6 mb-4">
          //     <img src={Qipro} alt="Qipro" className="img-fluid client-logo" />
          //   </div>
          // </div>
          // <div className="row d-flex justify-content-between mt-5">
            // {/* Segunda fila de logos */}
          //   <div className="col-md-2 col-sm-6 mb-4">
          //     <img
          //       src={Supermex}
          //       alt="Super Mex"
          //       className="img-fluid client-logo"
          //     />
          //   </div>
          //   <div className="col-md-2 col-sm-6 mb-4">
          //     <img
          //       src={Mediamaraton}
          //       alt="Media Maraton"
          //       className="img-fluid client-logo"
          //     />
          //   </div>
          //   <div className="col-md-2 col-sm-6 mb-4">
          //     <img src={Alma} alt="Alma" className="img-fluid client-logo" />
          //   </div>
          //   <div className="col-md-2 col-sm-6 mb-4">
          //     <img
          //       src={Alabardero}
          //       alt="Alarbadero"
          //       className="img-fluid client-logo"
          //     />
          //   </div>
          //   <div className="col-md-2 col-sm-6 mb-4">
          //     <img
          //       src={Segurestil}
          //       alt="Segurestil"
          //       className="img-fluid client-logo"
          //     />
          //   </div>
          // </div>
          // {/* Texto final con el botón */}
      //     <div className="row mt-5">
      //       <div className="col text-center">
      //         <p className="quieres">¿Quieres ser una de ellas?</p>
      //         <a href="#" className="btn btn-primary btn-lg btn-yes">
      //           YES!
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </section>
      // {/* Nueva sección de proyectos */}
      // <section className="projects-section mt-5">
      //   <div className="container">
          // {/* Título de la sección */}
          // <div className="row mb-5">
          //   <div className="col text-start">
          //     <h2 className="section-title">
          //       Te hacemos spoiler de nuestros mejores proyectos
          //     </h2>
          //   </div>
          // </div>

          // {/* Primera fila de proyectos */}
          // <div className="row">
          //   <div className="col-md-4 mb-4">
          //     <div
          //       className="project-card"
          //       onClick={() => handleImageClick(gepopup)}
          //     >
          //       <img
          //         src={gepro}
          //         alt="General Elevadores"
          //         className="img-fluid"
          //       />
          //       <div className="project-info mt-2">
          //         <small>General Elevadores</small>
          //         <h4>Actualizo mi branding y pasa esto…</h4>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="col-md-4 mb-4">
          //     <div
          //       className="project-card"
          //       onClick={() => handleImageClick(gepopup)}
          //     >
          //       <img src={supermexpro} alt="Supermex" className="img-fluid" />
          //       <div className="project-info mt-2">
          //         <small>Supermex</small>
          //         <h4>El rebranding que la competencia no quiere que veas.</h4>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="col-md-4 mb-4">
          //     <div
          //       className="project-card"
          //       onClick={() => handleImageClick(gepopup)}
          //     >
          //       <img src={montosapro} alt="Montosa" className="img-fluid" />
          //       <div className="project-info mt-2">
          //         <small>Montosa</small>
          //         <h4>
          //           Seguro que no sabías que el aguacate también servía para
          //           esto.
          //         </h4>
          //       </div>
          //     </div>
          //   </div>
          // </div>

          // {/* Segunda fila de proyectos */}
          // <div className="row">
          //   <div className="col-md-4 mb-4">
          //     <div
          //       className="project-card"
          //       onClick={() => handleImageClick(gepopup)}
          //     >
          //       <img
          //         src={lesrochespro}
          //         alt="Les Roches"
          //         className="img-fluid"
          //       />
          //       <div className="project-info mt-2">
          //         <small>Les Roches</small>
          //         <h4>Destino, ¿se nace o se hace?</h4>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="col-md-4 mb-4">
          //     <div
          //       className="project-card"
          //       onClick={() => handleImageClick(gepopup)}
          //     >
          //       <img src={almapro} alt="Alma Láser" className="img-fluid" />
          //       <div className="project-info mt-2">
          //         <small>Alma Láser</small>
          //         <h4>
          //           Después de ver esto, vas a empezar a creer en el poder del
          //           Alma...
          //         </h4>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="col-md-4 mb-4">
          //     <div
          //       className="project-card"
          //       onClick={() => handleImageClick(gepopup)}
          //     >
          //       <img src={porshepro} alt="Porsche" className="img-fluid" />
          //       <div className="project-info mt-2">
          //         <small>Porsche</small>
          //         <h4>¿Qué fiera tiene cuatro patas que ruedan?</h4>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          // {/* Popup de imagen */}
      //     {showPopup && (
      //       <div className="popup-overlay">
      //         <div className="popup-content">
      //           <img src={currentImage} alt="Popup" className="img-fluid" />
      //           <img
      //             src={mas}
      //             alt="volver"
      //             className="close-btn"
      //             onClick={handleClosePopup}
      //           />
      //         </div>
      //       </div>
      //     )}
      //   </div>
      // </section>
      // {/* Sección de Carrusel */}
      // <section className="carousel-section">
      //   {/* Primera fila - Movimiento de derecha a izquierda */}
      //   <div className="carousel-row">
      //     <div className="carousel-content move-right">
      //       <span>social media</span>
      //       <img src={estrella} alt="star icon" className="icon-star" />
      //       <span>fotografía</span>
      //       <img src={linea} alt="line icon" className="icon-line" />
      //       <span>packaging</span>
      //       <img src={estrella} alt="star icon" className="icon-star" />
      //       <span>redacción creativa</span>
      //       <img src={linea} alt="line icon" className="icon-line" />
      //       <span>social media</span>
      //       <img src={estrella} alt="star icon" className="icon-star" />
      //       <span>fotografía</span>
      //       <img src={linea} alt="line icon" className="icon-line" />
      //       <span>packaging</span>
      //       <img src={estrella} alt="star icon" className="icon-star" />
      //       <span>redacción creativa</span>
      //       <img src={linea} alt="line icon" className="icon-line" />
      //     </div>
      //   </div>

        // {/* Segunda fila - Movimiento de izquierda a derecha */}
      //   <div className="carousel-row">
      //     <div className="carousel-content move-left">
      //       <span>consultoría estratégica</span>
      //       <img src={estrella} alt="star icon" className="icon-star" />
      //       <span>motion graphics</span>
      //       <img src={linea} alt="line icon" className="icon-line" />
      //       <span>desarrollo web</span>
      //       <img src={estrella} alt="star icon" className="icon-star" />
      //       <span>consultoría estratégica</span>
      //       <img src={estrella} alt="star icon" className="icon-star" />
      //       <span>motion graphics</span>
      //       <img src={linea} alt="line icon" className="icon-line" />
      //       <span>desarrollo web</span>
      //       <img src={estrella} alt="star icon" className="icon-star" />
      //     </div>
      //   </div>
      // </section>
      // <div className="container contact-form my-5">
      //   <h1 className="form-title">VAMOS AL LÍO!</h1>
      //   <form>
      //     <div className="form-group">
      //       <label htmlFor="name">Nombre</label>
      //       <div className="input-wrapper">
      //         <input type="text" id="name" className="form-input" />
              // {/* <img src={estrella} alt="star icon" className="star-icon" /> */}
          //   </div>
          // </div>
          // <div className="form-group">
          //   <label htmlFor="email">Mail</label>
          //   <div className="input-wrapper">
          //     <input type="email" id="email" className="form-input" />
          //     <img src={estrella} alt="star icon" className="star-icon" />
          //   </div>
          // </div>
          // <div className="form-group">
          //   <label htmlFor="phone">Teléfono</label>
          //   <div className="input-wrapper">
          //     <input type="tel" id="phone" className="form-input" />
              // {/* <img src={estrella} alt="star icon" className="star-icon" /> */}
    //         </div>
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="message">
    //           Haznos un teaser sobre qué necesitas
    //         </label>
    //         <textarea id="message" rows="4" className="form-input"></textarea>
    //       </div>
    //       <div className="form-group">
    //         <h2>Ready para que tu marca empiece a petarlo?</h2>
    //         <div className="send-wrapper">
    //           <button type="submit" className="send-button">
    //             YASSSSSS!
    //           </button>
    //           <img src={flecha} alt="arrow icon" className="arrow-icon" />
    //           <span className="arrow-text">DALE PARA ENVIAR</span>
    //         </div>
    //       </div>
    //       <div className="terms-wrapper">
    //         <input type="checkbox" id="terms" />
    //         <label htmlFor="terms">
    //           He leído y acepto la{" "}
    //           <a href="https://www.elpuentepublicidad.com/politica-de-privacidad">
    //             política de privacidad
    //           </a>
    //         </label>
    //       </div>
    //     </form>
    //   </div>
    //   <div className="contact-section">
    //     <h1 className="big-title">¿TE ATREVES A CRUZAR?</h1>
    //     <div className="contact-info">
    //       <div className="contact-left">
    //         <p>hola@elpuentepublicidad.com</p>
    //         <p>(+34) 952 424 234</p>
    //       </div>
    //       <div className="contact-right">
    //         <p>C/ Compositor Lehmberg Ruiz,</p>
    //         <p>6 Edificio Ibiza, oficina 4 Málaga</p>
    //       </div>
    //     </div>
    //   </div>
    //   <footer className="footer-section">
    //     <div className="social-links">
    //       <a
    //         href="https://www.instagram.com/elpuentebranding/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         INSTAGRAM
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/company/el-puente-publicidad/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="highlighted"
    //       >
    //         LINKEDIN
    //       </a>
    //       <div className="vimeo-wrapper">
    //         <a
    //           href="https://vimeo.com/elpuentepublicidad"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           VIMEO
    //         </a>
    //         <img
    //           src={salpicadoazul}
    //           alt="Salpicado"
    //           className="splatter-image"
    //         />
    //       </div>
    //     </div>
    //     <div className="legal-links">
    //       <a href="https://www.elpuentepublicidad.com/aviso-legal">
    //         aviso legal
    //       </a>
    //       <a href="https://www.elpuentepublicidad.com/politica-de-privacidad">
    //         política de privacidad
    //       </a>
    //       <a href="https://www.elpuentepublicidad.com/politica-de-cookies">
    //         política de cookies
    //       </a>
    //     </div>
    //     <div className="footer-logo">
    //       <a
    //         href="https://www.elpuentepublicidad.com/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <img src={puente} alt="El Puente Branding Logo" />
    //       </a>
    //     </div>
    //   </footer>
    // </div>
  );
}

export default App;
