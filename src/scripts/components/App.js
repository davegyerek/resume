import React from 'react';
import {Provider} from 'react-redux'
import configureStore, {getHistory} from '../configureStore';
import {ConnectedRouter} from 'react-router-redux'
import registerServiceWorker from "../registerServiceWorker";
import {Route} from "react-router-dom";

import '../../styles/App.scss';
import api from "../api";
import {receiveAddress, requestAddress} from "../ducks/personalData";
import {scroll} from "../ducks/scrollTop";
import LandingContainer from "../containers/LandingContainer";

require("font-awesome-webpack");


const store = configureStore();
const history = getHistory();

setTimeout(function() {
    store.dispatch(requestAddress());
    api.getLocation("Budapest, Bokréta utca 15", result => {
        store.dispatch(receiveAddress(result.predictions[0].description))
    });
}, 1500);

window.addEventListener('scroll', function(e) {
    store.dispatch(scroll(e.srcElement.body.scrollTop));
});

export default function () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="app-root">
                    <Route exact path="/" component={LandingContainer}/>
                </div>
            </ConnectedRouter>
        </Provider>
    );
}
registerServiceWorker();