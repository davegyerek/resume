import React from 'react';
import {Provider} from 'react-redux'
import configureStore, {getHistory} from '../configureStore';
import {ConnectedRouter} from 'react-router-redux'
import registerServiceWorker from "../registerServiceWorker";
import {Route} from "react-router-dom";
import Home from './Home';

import '../../styles/App.scss';

require("font-awesome-webpack");


const store = configureStore();
const history = getHistory();

export default function () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="app-root">
                    <Route exact path="/" component={Home}/>
                </div>
            </ConnectedRouter>
        </Provider>
    );
}
registerServiceWorker();