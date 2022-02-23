import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";



import dashboard from './extra/dashboard';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>               
                    <Route path="/Dashboard" component={dashboard} />
                </Switch>
            </Router>
        )
    }
}