import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        };
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.logIn({
            email: "demo@sportsblr.com",
            password: "password",
            username: "DemoUser"
        });
    }

    handleSignup(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.createUser(user);
    }

    handleLogin(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.logIn(user);
    }


    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    errors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    render() {
        const { formType } = this.props;
        let formtype;
        let linkTo;
        let handlefunc;
        let createUserForm;
        if (formType === "Create User") {
            formtype = 'Sign Up!';
            linkTo = <Link to="/login">Log In</Link>;
            handlefunc = this.handleSignup;
            createUserForm = <label>Username:
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                    required
                                />
                            </label>;
        } else {
            formtype = 'Log In!';
            linkTo = <Link to="/signup">Sign Up</Link>;
            handlefunc = this.handleLogin; 
        }

        return (
            <div>
                <h2>{formtype}</h2>
                {linkTo}
                <form>
                    {this.errors()}
                    <label>Email:
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            required
                        />
                    </label>
                    {createUserForm}
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            required
                        />
                        <button onClick={handlefunc}>{formtype}</button>
                        <button onClick={this.handleDemoLogin}>Demo</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default SessionForm;
