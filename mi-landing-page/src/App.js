import React from 'react';
import './App.css';
import logo from './images/ff2e987dbc2df60b444c012e41913400.gif'
import puente from './images/logo.png'
import yeah from './images/yeah.png'
import hacemos from './images/hacemos.png'
// import falsa from './images/falsa.jpg'
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
            <img src={logo} className="App-logo my-5" alt="logo" />
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
    </div>
  );
}

export default App;
