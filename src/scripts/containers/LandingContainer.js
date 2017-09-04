import {connect} from 'react-redux';
import LandingContent from "../components/LandingContent";
import {startReadMore} from "../ducks/readMore";

const mapStateToProps = state => ({
    scrollTop: state.scrollTop,
    info: state.personalData,
    isCode: state.personalData.isCode,
    isDone: state.readMore
});

function onReadMoreClick(){
    return (dispatch) => {
        dispatch(startReadMore());
    }
}

export default connect(
    mapStateToProps,
    {onReadMoreClick}
)(LandingContent);