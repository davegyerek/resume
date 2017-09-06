import React from 'react';
import moment from "moment";
import InfoBox from "../common/InfoBox";

export default function ({aboutExpanded, techExpanded, onCloseClick, onAboutExpandClick}) {
    return (
        <InfoBox title="about me" size={aboutExpanded ? 12 : (techExpanded ? 8 : 7)}
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
                 }/>
    );
}