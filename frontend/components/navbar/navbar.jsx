import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { clicked: false};
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    handleIconClick() {
        const value = this.state.clicked ? false : true;
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
        const button = <span className="logout-dropdown"
            onClick={logOut}> Logout
        </span>;
        const dropdown = <div 
            className="user-dropdown">
            <ul>
                <li className="li-button">{button}</li>
            </ul>
        </div>;
        const wholepage = <div onClick={this.handleIconClick} className="click-it"></div>;
        const rightNav = (
            <section className="right-nav">
                <ul>
                    <li className="icon-li">
                        <i onClick={this.handleIconClick} className="fas fa-user fa-2x"></i>
                        <p className="account">Account</p>
                    </li>
                </ul>                          
                {this.state.clicked ? dropdown : <></>}                      
            </section>
        )

        return (
            <nav className="navbar">
                {leftNav}
                {currentUser ? rightNav : <></>}
                {this.state.clicked ? wholepage : <></>}
            </nav>
        )
    }
}
 
export default Navbar;