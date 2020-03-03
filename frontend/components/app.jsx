import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './sessionform/login_form_container';
import SignupFormContainer from './sessionform/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
    <div className="app-div">        
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/dashboard" component={DashboardContainer} />
            <AuthRoute exact path="/" component={GreetingContainer} />
        </Switch>
    </div>
);

export default App;