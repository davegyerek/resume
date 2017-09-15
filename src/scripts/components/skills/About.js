import React from 'react';
import InfoBox from "../common/InfoBox";
import data from '../../dataSource';


export default function ({aboutExpanded, techExpanded, onCloseClick, onAboutExpandClick}) {
    const {greeting, short, extended} = data.about;
    const content = (aboutExpanded ? extended : short).split('\n');
    return (
        <InfoBox title="about me" size={aboutExpanded ? 12 : (techExpanded ? 8 : 7)}
                 offset={techExpanded ? 2 : 0}
                 content={
                     <div>
                         <h4>{greeting}</h4>
                         {content.map((x,i) => <p key={i}>{x}</p>)}
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
                 }/>
    );
}