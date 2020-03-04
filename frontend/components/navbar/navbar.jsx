import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { clicked: false};
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    handleIconClick(value = (this.state.clicked ? false : true)) {
        // const value = this.state.clicked ? false : true;
        this.setState({ clicked: value });
    }

    render() {
        const { currentUser, logOut } = this.props;
        const loggedin = currentUser ? "left-nav nav-loggedin" : "left-nav";
        const logolink = currentUser ? ("/dashboard") : ("/");
        const leftNav = (
            <section className={loggedin}>
                <Link to={logolink}><strong className="logo">S</strong></Link>
            </section>
        );

        const button = <button className="logout-dropdown"
            onClick={logOut}> Logout
        </button>;
        const dropdown = <div className="user-dropdown">
            <ul>
                <li>
                    {button}
                </li>
            </ul>
        </div>;
        const rightNav = (
            <section className="right-nav">
                <ul>
                    <li className="icon-li">
                        <i onClick={this.handleIconClick} class="fas fa-user fa-2x"></i>
                        {this.state.clicked ? dropdown : ""}
                        <p className="account">Account</p>
                    </li>
                </ul>                          
            </section>
        )

        return (
            <nav className="navbar">
                {leftNav}
                {currentUser ? rightNav : ""}
            </nav>
        )
    }
}
 
export default Navbar;