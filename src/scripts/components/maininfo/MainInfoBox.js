import React from 'react';
import Info from "./Info";
import SocialLink from "../common/SocialLink";
import {Link} from "react-router-dom";
import profilePic from '../../../content/proile.jpg'

export default function ({info, isCode}) {
    const {age, address, email, phone} = info;
    return (
        <div className="info-resume">
            <h1>Balina Bálint</h1>
            <h4>Fullstack Web & CrossPlatform Mobile Developer</h4>
            <img className="img img-responsive img-circle hidden-md hidden-lg"
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
                <div className="btn btn-primary learn-more-button">
                    <Link to="resume">
                        <i className="fa fa-angle-down"></i>&nbsp;
                        Would like to read more?
                    </Link>
                </div>
            </div>
        </div>
    );
}