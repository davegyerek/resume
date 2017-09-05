import React from 'react';
import {Provider} from 'react-redux'
import configureStore, {getHistory} from '../configureStore';
import registerServiceWorker from "../registerServiceWorker";
import {ConnectedRouter} from 'react-router-redux'
import {Route, Switch, Redirect} from 'react-router-dom';
import '../../styles/App.scss';
import api from "../api";
import {receiveAddress, requestAddress} from "../ducks/personalData";
import {initialize} from "../ducks/scrollTop";
import LandingContainer from "../containers/LandingContainer";
import ResumeContainer from "../containers/ResumeContainer";
import NotFound from "./NotFound";

require("font-awesome-webpack");


const store = configureStore();
const history = getHistory();

setTimeout(function () {
    store.dispatch(requestAddress());
    api.getLocation("Budapest, Bokréta utca 15", result => {
        store.dispatch(receiveAddress(result.predictions[0].description))
    });
}, 1500);
initialize(store.dispatch);


export default function () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/landing" component={LandingContainer}/>
                    <Route exact path="/resume" component={ResumeContainer}/>
                    <Redirect exact from="/" to="landing"/>
                    <Route component={NotFound}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
registerServiceWorker();