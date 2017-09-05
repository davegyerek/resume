import React from 'react';

import profilePic from '../../content/proile.jpg'
import '../../styles/Landing.scss'
import MainInfoBoxContainer from "../containers/MainInfoContainer";



export default function ({scrollTop, isDone, onReadMoreClick}) {
    return (
        <div>
            <header className={`content-container${isDone ? " done" : ""}`}>
                <div className="container-fluid header-content">
                    <span className="trapeze-bg"
                          style={{width: `${65 + scrollTop / 12.5}%`}}></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 title-center-content">
                                <div className="col-md-6 p-l-0 p-r-0">
                                    <MainInfoBoxContainer/>
                                </div>
                                <div className="col-md-5 title-resume">
                                    <span className="visible-md visible-lg">Software Developer</span>
                                    <div className="text-center">
                                        <img
                                            className="img img-responsive img-circle visible-md-inline visible-lg-inline"
                                            src={profilePic}
                                            alt="Profile Picture"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}