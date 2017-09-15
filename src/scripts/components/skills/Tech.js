import React from 'react';
import InfoBox from "../common/InfoBox";
import TechSkill from "./TechSkill";
import {importAllImage} from "../../common";
import data from '../../dataSource';

let logos = {};
importAllImage(require.context('../../../content/tech-logos', false, /\.png$/), logos);

export default function ({aboutExpanded, techExpanded, onCloseClick, onTechExpandClick}) {
    return (
        <InfoBox title="tech" size={techExpanded ? 12 : (aboutExpanded ? 6 : 5)} offset={aboutExpanded ? 3 : 0}
                 content={
                     <div>
                         {techExpanded ?
                             <div className="row m-b-20">
                                 <div className="col-md-4">
                                     <h4><i className="fa fa-code"></i>&nbsp;Languages</h4>
                                     <ul className="list-unstyled">
                                         {data.tech.extended.languages.map((x,i) => <li key={i}>{x}</li>)}
                                     </ul>
                                 </div>
                                 <div className="col-md-4">
                                     <h4><i className="fa fa-wrench"></i>&nbsp;Technologies</h4>
                                     <ul className="list-unstyled">
                                         {data.tech.extended.technologies.map((x,i) => <li key={i}>{x}</li>)}
                                     </ul>
                                 </div>
                                 <div className="col-md-4">
                                     <h4><i className="fa fa-pencil"></i>&nbsp;IDEs</h4>
                                     <ul className="list-unstyled">
                                         {data.tech.extended.ides.map((x,i) => <li key={i}>{x}</li>)}
                                     </ul>
                                 </div>
                             </div> :
                             <ul className="list-unstyled">
                                 {data.tech.short.map((x,i) => <TechSkill key={i} {...x} icon={logos[x.icon]}/>)}
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