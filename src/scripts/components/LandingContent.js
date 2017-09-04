import React from 'react';

import profilePic from '../../content/proile.jpg'
import '../../styles/Home.scss'

export function SocialLink({url, icon}) {
    return (
        <li>
            <a href={url} target="_blank"><i className={`fa fa-${icon}`}></i></a>
        </li>
    );
}

let data = {};

export function Info({title, content, isCode}) {
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

export default function ({scrollTop, info, isCode, isDone, onReadMoreClick}) {
    const {age, address, email, phone} = info;
    return (
        <div>
            <header className={`content-container${isDone ? " done" : ""}`}>
                <div className="container-fluid header-content">
                    <span className="trapeze-bg"
                          style={{width: `${65 + scrollTop/12.5}%`}}></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 title-center-content">
                                <div className="col-md-6 info-resume">
                                    <h1>Balina Bálint</h1>
                                    <h4>Fullstack Web & CrossPlatform Mobile Developer</h4>
                                    <img className="img img-responsive img-circle hidden-md hidden-lg pull-right"
                                         src={profilePic}
                                         alt="Profile Picture"/>
                                    <div className="info-container">
                                        <ul className="list-unstyled">
                                            <li><Info title="Location" content={address} isCode={isCode}/></li>
                                            <li><Info title="Email" content={email} isCode={isCode}/></li>
                                            <li><Info title="Phone" content={phone} isCode={isCode}/></li>
                                            <li><Info title="Age" content={age} isCode={isCode}/></li>
                                            <li className="divider secondary"></li>
                                            <ul className="list-unstyled">
                                                <SocialLink
                                                    url="https://stackoverflow.com/users/5493460/b%C3%A1lint-balina"
                                                    icon="stack-overflow"/>
                                                <SocialLink url="https://github.com/balinabbb" icon="github"/>
                                                <SocialLink
                                                    url="https://www.linkedin.com/in/balina-b%C3%A1lint-98a2b7142/"
                                                    icon="linkedin"/>
                                            </ul>
                                        </ul>
                                        <button className="btn btn-success"><i
                                            className="fa fa-cloud-download"></i>&nbsp;
                                            Download CV
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-5 title-resume">
                                    <span className="visible-md visible-lg">Software Developer</span>
                                    <div className="text-center">
                                        <img
                                            className="img img-responsive img-circle visible-md-inline visible-lg-inline"
                                            src={profilePic}
                                            alt="Profile Picture"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div style={{height: "800px"}}>
            </div>
        </div>
    );
}