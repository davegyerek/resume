import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../content/logo.svg';


export default function () {
    return (
        <div className="page">
            <svg src={logo} className="App-logo" alt="logo" title={logo.title} role="img">
                <use xlinkHref={logo.symbol}/>
            </svg>
            <h2>Welcome to React</h2>
            <Link to={`/yolo`} style={{color: "white"}}>yolo</Link>
        </div>
    );
}