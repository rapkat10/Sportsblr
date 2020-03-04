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
        const loggedin = currentUser ? "main-nav nav-loggedin" : "main-nav";
        const logolink = currentUser ? ("/dashboard") : ("/");

        const dashboardbutton = <Link to="/dashboard">
            <strong className="dashboard">Dashboard</strong>
        </Link>;

        const button = <span className="logout-dropdown-button"
            onClick={logOut}> Logout
        </span>;

        const dropdown = <>
            <div className="user-dropdown-div">
                <li className="logout-dropdown-li">{button}</li>
                <li className="account-dropdown"><span>Account</span></li>
            </div>
        </>;

        const wholepage = <div onClick={this.handleIconClick} className="click-it"></div>;
        
        const rightNav = (
            <>
                <ul>
                    <li className="icon-li">
                        <i onClick={this.handleIconClick} className="fas fa-user fa-lg"></i>
                        <p className="account">Account</p>
                    </li>
                    {this.state.clicked ? dropdown : <></>}
                </ul>                          
            </>
        );

        const leftNav = (
            <section className={loggedin}>
                <Link to={logolink}><strong className="logo">S</strong></Link>
                {currentUser ? dashboardbutton : <></>}
                {currentUser ? rightNav : <></>}
            </section>
        );

        return (
            <nav className="navbar">
                {leftNav}
                {this.state.clicked ? wholepage : <></>}
            </nav>
        )
    }
}
 
export default Navbar;