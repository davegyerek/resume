import React from 'react';
import TimelineEvent from "./TimelineEvent";
import jsonData from '../../dataSource';
import {importAllImage} from '../../common';

const timelineData = jsonData.timeline;
const data = new Array(Math.ceil(timelineData.length / 2))
    .fill("")
    .map(function () {
        return this.splice(0, 2)
    }, timelineData.slice());

let logos = {};
importAllImage(require.context('../../../content/partner-logos', false, /\.png$/), logos);

export default function ({}) {
    return (
        <div className="time-line">
            <span className="center-line"/>
            {data.map((x, i) => {
                const logo0 = logos[x[0].logo];
                const logo1 = x[1] && logos[x[1].logo];
                return (
                    <div className="row" key={i}>
                        <TimelineEvent {...x[0]} logo={logo0}/>
                        {x[1] && <TimelineEvent {...x[1]} logo={logo1} right={true}/>}
                    </div>
                );
            })}
        </div>
    );
}