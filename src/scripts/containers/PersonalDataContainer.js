import {connect} from 'react-redux';
import Home from "../components/Home";

const mapStateToProps = state => state.personalData;

export default connect(
    mapStateToProps
)(Home);