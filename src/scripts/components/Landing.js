import React from 'react';
import {connect} from 'react-redux';
import '../../styles/Landing.scss'
import MainInfoBox from "./maininfo/index";
import {importAllImage} from "../common";
import data from '../dataSource';

let profilePics = {};
importAllImage(require.context('../../content/profile-pictures', false, /\.jpe?g$/), profilePics, "jpg");


export function LandingContent({scrollTop, isDone}) {
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
                                    <MainInfoBox/>
                                </div>
                                <div className="col-md-5 title-resume">
                                    <span className="visible-md visible-lg">{data.personal.fancyTitle}</span>
                                    <div className="text-center">
                                        <img
                                            className="img img-responsive img-circle visible-md-inline visible-lg-inline"
                                            src={profilePics[data.id]}
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

const mapStateToProps = state => ({
    scrollTop: state.scrollTop,
    isDone: state.readMore
});

export default connect(
    mapStateToProps,
    {}
)(LandingContent);