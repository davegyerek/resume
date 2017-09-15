import "../../styles/Resume.scss"
import React from 'react';
import MainInfoBox from "../components/maininfo"


import Skills from "../components/skills";
import Timeline from "./timeline";
import Title from "./common/Title";
import {connect} from "react-redux";


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

export function Resume({}) {
    return (
        <div className="resume-root">
            <div className="container-fluid">
                <div className="row">
                    <div className="container">
                        <MainInfoBox/>
                    </div>
                </div>
                <div className="row resume-content">
                    <ResumePart title="Skills" content={<Skills/>}/>
                    <ResumePart title="Timeline" content={<Timeline/>}/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({

});
export default connect(
    mapStateToProps,
    {}
)(Resume);