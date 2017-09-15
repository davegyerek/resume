import React from 'react';

export default function ({icon, title, percent}) {
    return (
        <li className="tech-skill">
            <img className="img img-responsive" src={icon}/>
            <h5>{title}
                <small className="m-t-10 text-muted pull-right">{percent}&nbsp;%</small>
            </h5>
            <div className="divider-container">
                <div className="divider" style={{width: percent + "%"}}></div>
            </div>
        </li>
    );
}