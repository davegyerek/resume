import React from 'react';
import "../../styles/Resume.scss"
import MainInfoBoxContainer from "../containers/MainInfoContainer"


import SkillsContainer from "../containers/SkillsContainer";
import Timeline from "./timeline";
import Details from "./details";
import Title from "./common/Title";


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
                    {/*<ResumePart title="Skills" content={<SkillsContainer/>}/>*/}
                    <ResumePart title="Timeline" content={<Timeline/>}/>
                    <ResumePart title="Details" content={<Details/>}/>
                </div>
            </div>
        </div>
    );
}