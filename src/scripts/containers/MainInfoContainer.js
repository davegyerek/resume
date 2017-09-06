import {connect} from 'react-redux';
import MainInfoBox from "../components/maininfo/MainInfoBox";

const mapStateToProps = state => ({
    info: state.personalData,
    isCode: state.personalData.isCode,
});

export default connect(
    mapStateToProps,
    {}
)(MainInfoBox);