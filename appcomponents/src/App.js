import './App.css';
import HelloWorld from './components/banner/Banner';// trae todo
import {Banner as Saludo} from './components/banner/Banner';
import Card from './components/tarjeta/Card';

const huerta = [
  {'nombre': 'manzana'},
  {'nombre' : 'banana'},
  {'nombre' : 'zanahoria'},
  {'nombre' : 'ajo'}
]

function App() {

  const elemento = huerta.filter(e => e.nombre.length>3).map(e => <Card nombre={e.nombre}/>  );

  return (
    <div className="App">
      <HelloWorld msg="Cartas generadas con Map y Filter, clase 11"/>
      <Saludo/>
      {elemento}
    </div>
  );
}

export default App;
