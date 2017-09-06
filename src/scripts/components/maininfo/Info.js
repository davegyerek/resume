import React from 'react';

let data = {};
export default function ({title, content, isCode}) {
    let current = Object.assign({}, data);
    current[title] === undefined && (current[title] = isCode);
    data[title] = isCode;
    return (
        <div>
            <strong>{title}</strong>
            <span className={isCode ? "code" : ""}>&nbsp;&nbsp;&nbsp;{content}</span>
        </div>
    );
}