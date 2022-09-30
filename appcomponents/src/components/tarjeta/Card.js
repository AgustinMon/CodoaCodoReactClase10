import React from "react";
import './card.css';

export default function Card(props){
    return(
        <div className="carta">
        <h2>{props.nombre}</h2>
        </div>
    )
}

Card.defaultProps = {
    nombre : 'not defined'
}