import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

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
        }).then(() => {
            this.props.getfollowFilteredPosts("followedFilter"); //?
        });;
    }

    handleSignup(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.createUser(user).then(() => {
            this.props.getfollowFilteredPosts("followedFilter"); //?
        });
    }

    handleLogin(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.logIn(user).then(() => {
            this.props.getfollowFilteredPosts("followedFilter"); //?
        });
    }


    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    errors() {
        return (
            <div className="errors">
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
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
            linkTo = <Link className="link-to" to="/login">Log In</Link>;
            handlefunc = this.handleSignup;
            createUserForm = <input className="username"
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                required="required"
                placeholder="Username"
            />;
        } else {
            formtype = 'Log In!';
            linkTo = <Link className="link-to" to="/signup">Sign Up</Link>;
            handlefunc = this.handleLogin; 
        }

        return (
            <div className="form-container">
                <img className="backgroundImage" src={window.basketball} />
                <NavbarContainer />
                <div className="linkto-flex">
                    {linkTo}
                </div>
                <div className="form-box"> 
                    <form className="form">
                        <h2 className="Sportsblr">Sportsblr</h2>
                        <div className="input-div">
                            <input className="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                required="required"
                                placeholder="Email"
                            />
                            {createUserForm}
                            <input className="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                required="required"
                                placeholder="Password"
                            />
                        </div>
                        <button className="signup-session" onClick={handlefunc}>{formtype}</button>
                        <button className="demo" onClick={this.handleDemoLogin}>Demo</button>
                        {this.errors()} 
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;
