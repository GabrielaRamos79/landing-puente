import React from 'react';
import './App.css';
import logo from './images/gif2.png'
import puente from './images/logo.png'
import yeah from './images/yeah.png'
import hacemos from './images/quehacemos.png'
import marca from './images/marca.png'
import digital from './images/digital.png'
import media from './images/media.png'
import branding from './images/branding.png'
import web from './images/web.png'
import audiovisual from './images/audiovisual.png'
import alotrolado from './images/alotrolado.png'
import flechaizq from './images/flechaizq.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container my-5">
      <header className="App-header text-center">
        <div className='row'>
          <div className='col-md-6 text-start'>
            <h1 className='highlight-text mb-4'>
              <span className='rayo'></span>
              Somos
              <img src={puente} className='puente-logo mb-2' alt='puente-logo' />
            </h1>
          </div>
          <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-12 d-flex justify-content-end align-items-start'>
            <h2 className='fw-bold'>
              tu agencia<br />
              de publicidad<br />
              y comunicación 360º
            </h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8 text-start d-flex flex-column justify-content-center">
            <p>
              Hacemos las cosas diferentes desde el otro lado<br />
              del branding: publicidad, branded content, diseño<br />
              y estrategia, ¡con un <b>punch de flow creativo</b>!<br />
            </p>
            <p>Si quieres revolucionar tu marca y llevarla hasta el<br></br>éxito, es el momento de cruzar al otro lado.<br />
            </p>
            <p>¿Quieres saber qué podemos hacer por ti?
            </p>
            <div className="col-md-4 d-flex"></div>
              <a className="App-link" href="https://elpuentepublicidad.com" target="_blank" rel="noopener noreferrer">
                ESCRÍBENOS
              </a>
          </div>
        </div>
        <img src={yeah} className='yeah' alt='ouh-yeah' />
        <img src={hacemos} className='hacemos' alt='que-hacemos' />
      </header>
      {/* Nueva sección para la parte de los servicios */}
      <section className="services-section mt-5">
        <div className="container">
          <div className="row">
            {/* Primera fila */}
            <div className="col-md-4">
              <h3>ESTRATEGIA DE <img src={marca} className='curvy' alt='marca' /></h3>
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
              <h3>ESTRATEGIA <img src={digital} className='curvy' alt='digital' /></h3>
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
              <h3>SOCIAL <img src={media} className='curvy' alt='media' /></h3>
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
              <h3><img src={branding} className='curvy' alt='branding' /></h3>
              <ul>
                <li>Identidad corporativa</li>
                <li>Identidad verbal</li>
                <li>Identidad sensorial</li>
                <li>Identidad actitudinal</li>
                <li>Manual de identidad de marca</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>DESARROLLO <img src={web} className='curvy' alt='web' /></h3>
              <ul>
                <li>Consultoría web</li>
                <li>Diseño y desarrollo</li>
                <li>Arquitectura de la información</li>
                <li>Experiencia de usuario</li>
                <li>Gestión y mantenimiento</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>PRODUCCIÓN <img src={audiovisual} className='curvy' alt='audiovisual' /></h3>
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
        <div className='col-md-9'>
        <h1 className='cruzado'>MIRA QUIÉN HA CRUZADO YA</h1>
        <img src={alotrolado} className='otrolado' alt='alotrolado' /><h3 className='telita'>TELITAAAA<img src={flechaizq} className='flecha' alt='flecha' /></h3>
        </div>
      </section>
      <section className="section-clients mt-5">
        
      </section>
    </div>
  );
}

export default App;
