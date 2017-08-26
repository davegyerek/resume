import React from 'react';
import {Provider} from 'react-redux'
import configureStore, {getHistory} from '../configureStore';
import {ConnectedRouter} from 'react-router-redux'
import Home from "./Home";
import registerServiceWorker from "../registerServiceWorker";
import {Link, Route} from "react-router-dom";
import Navbar from "./Navbar";

import '../../styles/App.scss';

const store = configureStore();
const history = getHistory();

export default function () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="app-root">
                    <Navbar link={[
                        <Link to="/">Home</Link>,
                        <Link to="/yolo">Subpage</Link>
                    ]}/>
                    <div className="container-fluid">
                        <Route exact path="/" component={Home}/>
                        {/*<Route exact path="/yolo" component={TEST}/>*/}
                    </div>
                </div>
            </ConnectedRouter>
        </Provider>
    );
}
registerServiceWorker();