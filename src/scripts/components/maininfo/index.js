import React from 'react';
import {connect} from 'react-redux';

import Info from "./Info";
import SocialLink from "../common/SocialLink";
import {Link} from "react-router-dom";
import data from '../../dataSource';
import {importAllImage} from "../../common";

let profilePics = {};
importAllImage(require.context('../../../content/profile-pictures', false, /\.jpe?g$/), profilePics);

export function MainInfoBox({info, isCode}) {
    const {age, address, email, phone} = info;
    const {name, position, links} = data.personal;
    return (
        <div className="info-resume">
            <h1>{name}</h1>
            <h4>{position}</h4>
            <img className="img img-responsive img-circle hidden-md hidden-lg"
                 src={profilePics[data.id]}
                 alt="Profile Picture"/>
            <div className="info-container">
                <ul className="list-unstyled">
                    <li><Info title="Location" content={address} isCode={isCode}/></li>
                    <li><Info title="Email" content={email} isCode={isCode}/></li>
                    <li><Info title="Phone" content={phone} isCode={isCode}/></li>
                    <li><Info title="Age" content={age} isCode={isCode}/></li>
                    <li className="divider secondary"></li>
                    <ul className="list-unstyled">
                        {links.map((x,i) => <SocialLink key={i} {...x}/>)}
                    </ul>
                </ul>
                <button className="btn btn-success"><i
                    className="fa fa-cloud-download"></i>&nbsp;
                    Download CV
                </button>
                <div className="btn btn-primary learn-more-button">
                    <Link to="resume">
                        <i className="fa fa-angle-down"></i>&nbsp;
                        Would like to read more?
                    </Link>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
    info: state.personalData,
    isCode: state.personalData.isCode,
});

export default connect(
    mapStateToProps
)(MainInfoBox);