import React, { useState } from "react";
import './boton.css';
import Card from '../tarjeta/Card';

export default function Boton () {
    const huerta = [
        {'nombre': 'manzana'},
        {'nombre' : 'banana'},
        {'nombre' : 'zanahoria'},
        {'nombre' : 'ajo'}
      ]

    const [valor, setCount] = useState(0);

    const elemento = huerta.filter(e => e.nombre.length>valor).map(e => <Card nombre={e.nombre}/>  );
    console.log(elemento);
    
    return (
        <>
        <p>Se filtran palabras con minimo de {valor} letras</p>
        <button onClick={()=>setCount(valor + 1)}>Click Me! + {valor}</button>
        {elemento}
        </>
    )
}