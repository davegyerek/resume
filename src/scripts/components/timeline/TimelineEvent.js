import React from 'react';
import TechBox from "../common/TechBox";

export default function ({company, title, description, logo, years, right}) {
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