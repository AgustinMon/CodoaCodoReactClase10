import './App.css';
import HelloWorld from './components/banner/Banner';// trae todo
import {Banner as Saludo} from './components/banner/Banner';
import Boton from './components/Boton/Boton';

function App() {

  return (
    <div className="App">
      <HelloWorld msg="Cartas generadas con Map y Filter, clase 11"/>
      <HelloWorld msg="Boton para crear las cartas con hook, clase 12"/>
      <Saludo/>
      <Boton/>;
    </div>
  );
}

export default App;
