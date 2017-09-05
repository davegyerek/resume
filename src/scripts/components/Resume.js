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

import vonalkod from "../../content/partner-logos/vonalkod.png";
import zenheads from "../../content/partner-logos/zenheads.png";
import oe from "../../content/partner-logos/oe.png";
import soter from "../../content/partner-logos/soter.png";
import merkit from "../../content/partner-logos/merkit.png";
import cloudcode from "../../content/partner-logos/cloudcode.png";
import goldsprint from "../../content/partner-logos/goldsprint.png";
import SkillsContainer from "../containers/SkillsContainer";

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

export function SkillsResumePart({techExpanded, aboutExpanded, onTechExpandClick, onAboutExpandClick, onCloseClick}) {
    const about = <TechBox title="about me" size={aboutExpanded ? 12 : (techExpanded ? 8 : 7)}
                           offset={techExpanded ? 2 : 0}
                           content={
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
                                   {aboutExpanded ?
                                       <a className="btn btn-lg btn-primary show-more-button"
                                          onClick={onCloseClick}><i className="fa fa-angle-up"></i>&nbsp;Show
                                           less</a> :
                                       <a className="btn btn-lg btn-primary show-more-button"
                                          onClick={onAboutExpandClick}><i className="fa fa-angle-down"></i>&nbsp;
                                           Show
                                           more</a>
                                   }
                               </div>
                           }/>;
    const tech = <TechBox title="tech" size={techExpanded ? 12 : (aboutExpanded ? 6 : 5)} offset={aboutExpanded ? 3 : 0}
                          content={
                              <div>
                                  {techExpanded ?
                                      <div className="row m-b-20">
                                          <div className="col-md-4">
                                              <h4><i className="fa fa-code"></i>&nbsp;Languages</h4>
                                              <ul className="list-unstyled">
                                                  <li>C# 7.0</li>
                                                  <li>Javascript, ES6</li>
                                                  <li>Python 3</li>
                                                  <li>Html5, CSS3, SASS, LESS</li>
                                                  <li>Java, C, C++</li>
                                              </ul>
                                          </div>
                                          <div className="col-md-4">
                                              <h4><i className="fa fa-wrench"></i>&nbsp;Technologies</h4>
                                              <ul className="list-unstyled">
                                                  <li>Git, Git Bash, Webhooks</li>
                                                  <li>Xamarin, MvvmCross</li>
                                                  <li>Windows Forms, WPF, ASP.NET, EF6, MS-SQL</li>
                                                  <li>React-Redux, React-Router, Webpack</li>
                                                  <li>Django, Uwsgi, Nginx, Pytest</li>
                                                  <li>Postgres SQL, SQLite</li>
                                                  <li>Appium, Selenium</li>
                                              </ul>
                                          </div>
                                          <div className="col-md-4">
                                              <h4><i className="fa fa-pencil"></i>&nbsp;IDEs</h4>
                                              <ul className="list-unstyled">
                                                  <li>Visual Studio, XCode</li>
                                                  <li>Atom, Sublimetext, Notepad++</li>
                                                  <li>Pycharm</li>
                                                  <li>IntelliJ, CLion</li>
                                              </ul>
                                          </div>
                                      </div> :
                                      <ul className="list-unstyled">
                                          <TechSkill img={xamarin} text="Xamarin - Cross platform mobile" percent="99"/>
                                          <TechSkill img={django} text="Django - Backend" percent="85"/>
                                          <TechSkill img={react} text="React-Redux - Frontend" percent="80"/>
                                          <TechSkill img={appium} text="Appium - UI Testautomation" percent="70"/>
                                      </ul>
                                  }
                                  {techExpanded ?
                                      <a className="btn btn-lg btn-primary show-more-button" onClick={onCloseClick}><i
                                          className="fa fa-angle-up"></i>&nbsp;Show
                                          less</a> :
                                      <a className="btn btn-lg btn-primary show-more-button"
                                         onClick={onTechExpandClick}><i className="fa fa-angle-down"></i>&nbsp;Show
                                          more</a>
                                  }
                              </div>
                          }/>;
    return (
        <div>
            {techExpanded ? (<div>{tech}{about}</div>) : (<div>{about}{tech}</div>)}
        </div>
    );
}

export function TimelineEvent({company, title, description, logo, years, right}) {
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
                    <div className="years">{years}</div>
                </div>
            }/>
        </div>
    );
}

export function TimelineResumePart({}) {
    return (
        <div className="time-line">
            <span className="center-line"></span>
            <div className="row">
                <TimelineEvent company="Obuda University" title="BA in Computer Science" years="2014 Sep - 2018 Jun"
                               description={
                                   <p>Software engineering, software technology, information technology, science</p>
                               } logo={oe}/>
                <TimelineEvent company="Vonalkód Rendszerház Kft." title="Backend Developer" years="2015 Okt - 2016 Mar"
                               description={
                                   <p>ASP.NET backend, MS-SQL database, bootstrap frontend of industrial systems</p>
                               } logo={vonalkod} right={true}/>
            </div>
            <div className="row">
                <TimelineEvent company="Zenheads Kft." title="Mobile Developer" years="2016 Mar"
                               description={
                                   <p>Development of connected cross platform mobile applications with Xamarin and
                                       MvvmCross</p>
                               } logo={zenheads}/>
                <TimelineEvent company="Cloudcode Hungary Kft." title="Fullstack Developer" years="2016 Sep"
                               description={
                                   <p>Business development with Django REST services and React-Redux frontend</p>
                               } logo={cloudcode} right={true}/>
            </div>
            <div className="row">
                <TimelineEvent company="Goldsprint Gear" title="IoT Developer" years="2016 Jun"
                               description={
                                   <p>Raspberry py 3, PCL design, Django Rest service for Goldsprint race
                                       measurement</p>
                               } logo={goldsprint}/>
                <TimelineEvent company="Merkit Consulting Kft." title="Test Engineer" years="2017 Mar"
                               description={
                                   <p>Selenium based test automation of mobile apps and websites</p>
                               } logo={merkit} right={true}/>
            </div>
            <div className="row">
                <TimelineEvent company="Soter-Line Oktatási Központ" title="Software Lecturer"
                               years="2017 May - 2017 Okt"
                               description={
                                   <p>Teach OOP, C# for a small group in Technical And Further Education</p>
                               } logo={soter}/>
            </div>
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
                    <ResumePart title="Skills" content={<SkillsContainer/>}/>
                    <ResumePart title="Timeline" content={<TimelineResumePart/>}/>
                </div>
            </div>
        </div>
    );
}