import React from 'react';

export default function ({img, text, percent}) {
    return (
        <li className="tech-skill">
            <img className="img img-responsive" src={img}/>
            <h5>{text}
                <small className="m-t-10 text-muted pull-right">{percent}&nbsp;%</small>
            </h5>
            <div className="divider-container">
                <div className="divider" style={{width: percent + "%"}}></div>
            </div>
        </li>
    );
}