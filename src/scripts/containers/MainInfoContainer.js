import {connect} from 'react-redux';
import {MainInfoBox} from "../components/Resume";
import {startReadMore} from "../ducks/readMore";

const mapStateToProps = state => ({
    info: state.personalData,
    isCode: state.personalData.isCode,
});

export default connect(
    mapStateToProps,
    {}
)(MainInfoBox);