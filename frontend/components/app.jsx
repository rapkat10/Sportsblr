import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './sessionform/login_form_container';
import SignupFormContainer from './sessionform/signup_form_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div className="app-div">
        {/* <img src={window.snowboardURL} /> */}
        <header>
            <Link to="/">
                <h1>Sportsblr</h1>
            </Link>
            {/* <GreetingContainer /> */}
            {/* <AuthRoute exact path="/" component={GreetingContainer} /> */}
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/" component={GreetingContainer} />
        </Switch>
    </div>
);

export default App;