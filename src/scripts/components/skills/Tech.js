import React from 'react';
import TechBox from "../common/TechBox";
import TechSkill from "../common/TechSkill";

import xamarin from "../../../content/tech-logos/xamarin.png";
import django from "../../../content/tech-logos/django.png";
import react from "../../../content/tech-logos/react.png";
import appium from "../../../content/tech-logos/appium.png";

export default function ({aboutExpanded, techExpanded, onCloseClick, onTechExpandClick}) {
    return (
        <TechBox title="tech" size={techExpanded ? 12 : (aboutExpanded ? 6 : 5)} offset={aboutExpanded ? 3 : 0}
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
                 }/>
    );
}