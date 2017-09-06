import React from 'react';
import Tech from "./Tech";
import About from "./About";

export default function (props) {
    const {techExpanded} = props;
    const tech = <Tech {...props}/>;
    const about = <About {...props}/>;
    return (
        <div>
            {techExpanded ? (<div>{tech}{about}</div>) : (<div>{about}{tech}</div>)}
        </div>
    );
}