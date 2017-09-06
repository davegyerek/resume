import React from 'react';

export default function ({title, size, content, offset}) {
    return (
        <div className={`col-md-${size}${offset && ` col-md-offset-${offset}` || ""}`}>
            <div className="tech-box">
                <h3 className="">{title}</h3>
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    );
}