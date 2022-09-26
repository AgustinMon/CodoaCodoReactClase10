import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/banner/Banner';// trae todo
import {Banner as Saludo} from './components/banner/Banner';

function App() {
  return (
    <div className="App">
      <HelloWorld msg="Hola Mundo"/>
      <Saludo/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
