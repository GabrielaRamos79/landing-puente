import './App.css';
import logo from './images/ff2e987dbc2df60b444c012e41913400.gif'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Somos el puente</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          tu agencia<br>
          </br>de publicidad<br>
          </br> y comunicación 360º
        </h2>
        <p>
          Hacemos las cosas diferentes desde el otro lado<br>
          </br>del branding: publicidad, branded content, diseño<br>
          </br>y estrategia, ¡con un <b>punch de flow creativo</b>!<br>
          </br>
        </p>
          <p>Si quieres revolucionar tu marca y llevarla hasta el<br></br>éxito, es el momento de cruzar al otro lado.<br>
          </br></p>
          <p>¿Quieres saber qué podemos hacer por ti?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escríbenos
        </a>
      </header>
    </div>
  );
}

export default App;
