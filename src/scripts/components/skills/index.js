import React from 'react';
import Tech from "./Tech";
import About from "./About";
import {connect} from "react-redux";
import {expandAbout, expandTech, close} from "../../ducks/expand";

export function Skills (props) {
    const {techExpanded} = props;
    const tech = <Tech {...props}/>;
    const about = <About {...props}/>;
    return (
        <div>
            {techExpanded ? (<div>{tech}{about}</div>) : (<div>{about}{tech}</div>)}
        </div>
    );
}


const mapStateToProps = state => ({
    ...state.expand
});

function onTechExpandClick() {
    return dispatch => {
        dispatch(expandTech())
    }
}

function onAboutExpandClick() {
    return dispatch => {
        dispatch(expandAbout())
    }
}

function onCloseClick() {
    return dispatch => {
        dispatch(close())
    }
}

export default connect(
    mapStateToProps,
    {onTechExpandClick, onAboutExpandClick, onCloseClick}
)(Skills);