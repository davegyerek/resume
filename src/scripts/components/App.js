import React from 'react';
import {Provider} from 'react-redux'
import configureStore, {getHistory} from '../configureStore';
import registerServiceWorker from "../registerServiceWorker";
import {ConnectedRouter} from 'react-router-redux'
import {Route, Switch, Redirect} from 'react-router-dom';
import '../../styles/App.scss';
import api from "../api";
import {receiveAddress, requestAddress} from "../ducks/personalData";
import NotFound from "./NotFound";
import Landing from "./Landing";
import Resume from "./Resume";
import data from '../dataSource';
import 'font-awesome-webpack';


const store = configureStore();
const history = getHistory();

setTimeout(function () {
    store.dispatch(requestAddress());
    api.getLocation(data.personal.address, result => {
        store.dispatch(receiveAddress(result.predictions[0].description))
    });
}, 1500);


export default function () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/landing" component={Landing}/>
                    <Route exact path="/resume" component={Resume}/>
                    <Redirect exact from="/" to="landing"/>
                    <Route component={NotFound}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
registerServiceWorker();