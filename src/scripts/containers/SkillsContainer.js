import {connect} from 'react-redux';
import {expandAbout, expandTech, close} from "../ducks/expand";
import Skills from '../components/skills'

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