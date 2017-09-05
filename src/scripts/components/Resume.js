import React from 'react';
import {Link} from 'react-router-dom';
import "../../styles/Resume.scss"
import profilePic from '../../content/proile.jpg'
import MainInfoBoxContainer from "../containers/MainInfoContainer"
import moment from "moment";

import xamarin from "../../content/tech-logos/xamarin.png";
import django from "../../content/tech-logos/django.png";
import react from "../../content/tech-logos/react.png";
import appium from "../../content/tech-logos/appium.png";

import zenheads from "../../content/partner-logos/zenheads.png";

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

export function MainInfoBox({info, isCode}) {
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
                <div className="btn btn-lg btn-primary">
                    <Link to="resume">
                        <i className="fa fa-angle-down"></i>&nbsp;
                        Would like to read more?
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function Title({title}) {
    return (
        <h2 className="text-center text-uppercase m-b-20">{title}</h2>
    );
}

export function TechBox({title, size, content, offset}) {
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

export function TechSkill({img, text, percent}) {
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

export function ResumePart({title, content}) {
    return (
        <div>
            <Title title={title}/>
            <div className="container">
                <div className="row">
                    {content}
                </div>
            </div>
        </div>
    );
}

export function SkillsResumePart({}) {
    return (
        <div>
            <TechBox title="about me" size="7" content={
                <div>
                    <h4>Hello!</h4>
                    <p>
                        My name is Balina Bálint. A real enthusiast developer, biker, <i
                        className="fa fa-beer"></i> beerpong lover, and engaged to a beautiful lady.
                    </p>
                    <p>
                        With only <strong>{moment().diff("2014-09-01", 'years')}</strong> years of
                        experience behind me
                        I work with multiple remarkable partners. I am leader a small team, and each
                        month
                        I deliver the best quality of product.
                    </p>
                </div>
            }/>
            <TechBox title="tech" size="5" content={
                <div>
                    <ul className="list-unstyled">
                        <TechSkill img={xamarin} text="Xamarin - Cross platform mobile" percent="99"/>
                        <TechSkill img={django} text="Django - Backend" percent="85"/>
                        <TechSkill img={react} text="React-Redux - Frontend" percent="80"/>
                        <TechSkill img={appium} text="Appium - UI Testautomation" percent="70"/>
                    </ul>
                </div>
            }/>
        </div>
    );
}

export function TimelineEvent({company, title, description, logo, right}) {
    return (
        <div className={right && " right" || ""}>
            <TechBox title={company} size="4" offset={right ? 0 : 2} content={
                <div className="time-line-event">
                    <div className="time-line-pointer"><span/></div>
                    <img src={logo} className="img img-responsive"/>
                    <h4>{title}</h4>
                    <div className="description">
                        {description}
                    </div>
                </div>
            }/>
        </div>
    );
}

export function TimelineResumePart({}) {
    return (
        <div className="time-line">
            <span className="center-line"></span>
            <TimelineEvent company="Zenheads Kft." title="Xamarin Developer"
                           description={
                               <p>Development of connected cross platform mobile applications.</p>
                           } logo={zenheads}/>
            <TimelineEvent company="Zenheads Kft." title="Xamarin Developer"
                           description={
                               <p>Development of connected cross platform mobile applications.</p>
                           } logo={zenheads} right={true}/>
        </div>
    );
}

export default function ({}) {
    return (
        <div className="resume-root">
            <div className="container-fluid">
                <div className="row">
                    <div className="container">
                        <MainInfoBoxContainer/>
                    </div>
                </div>
                <div className="row resume-content">
                    <ResumePart title="Skills" content={<SkillsResumePart/>}/>
                    <ResumePart title="Timeline" content={<TimelineResumePart/>}/>
                </div>
            </div>
        </div>
    );
}