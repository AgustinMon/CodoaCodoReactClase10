import React from 'react';
import './banner.css';

export function Banner(props) {
    return (
        <div className="banner">
            <h1> {props.msg} </h1>
        </div>
    )
}

Banner.defaultProps = {
    msg : "este es un mensaje"
}

export default function HelloWorld(props) {
    return (<div className="banner">
        <h3> {props.msg} </h3>
    </div>)
}

HelloWorld.defaultProps = {
    msg : "este es un mensaje"
}