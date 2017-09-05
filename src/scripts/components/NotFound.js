import React from 'react';
import {Link} from "react-router-dom";
import "../../styles/NotFound.scss";

export default function ({}) {
    return (
        <div className="not-found">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <div className="box">
                            <h2><i className="fa fa-meh-o"></i>&nbsp;I am truly sorry.</h2>
                            The page you are looking for is not here.&nbsp;
                            <Link to="/">Need some help?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}