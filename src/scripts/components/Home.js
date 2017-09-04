import React from 'react';
import profilePic from '../../content/proile.jpg'

import '../../styles/Home.scss'
import moment from 'moment';

export function SocialLink({url, icon}) {
    return (
        <li>
            <a href={url} target="_blank"><i className={`fa fa-${icon}`}></i></a>
        </li>
    );
}

export default function ({}) {
    return (
        <header className="header-container">
            <div className="container-fluid header-content">
                <span className="trapeze-bg"></span>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 title-center-content">
                            <div className="col-md-6 info-resume">
                                <h1>Balina Bálint</h1>
                                <div className="divider"></div>
                                <div className="info-container">
                                    <ul className="list-unstyled">
                                        <li><h3>Age</h3>{moment().diff('1994-09-02', 'years')}</li>
                                        <li className="divider secondary"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 title-resume">
                                <span>Software Developer</span>
                                <div className="text-center">
                                    <img className="img img-responsive img-circle" src={profilePic}
                                         alt="Profile Picture"/>
                                    <ul className="list-unstyled">
                                        <SocialLink url="https://www.linkedin.com/in/balina-b%C3%A1lint-98a2b7142/"
                                                    icon="linkedin"/>
                                        <SocialLink url="https://github.com/balinabbb" icon="github"/>
                                        <SocialLink url="https://plus.google.com/u/0/115679873390634462779"
                                                    icon="google-plus"/>
                                        <SocialLink url="https://stackoverflow.com/users/5493460/b%C3%A1lint-balina"
                                                    icon="stack-overflow"/>
                                        <SocialLink url="https://www.freelancer.com/u/balinabbb" icon="star"/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}