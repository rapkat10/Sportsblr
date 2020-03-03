import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {

        const { currentUser, logOut } = this.props;
        const loggedin = currentUser ? "left-nav nav-loggedin" : "left-nav";

        const leftNav = (
            <section className={loggedin}>
                <Link to="/">
                    <strong className="logo">S</strong>
                </Link>
                {/* <input 
                    className="search-box"
                    type="text"
                    placeholder="Search Sportsblr"
                /> */}
            </section>
        )

        const button = <button className="logout-dropdown"
                    onClick={logOut}>
                    Logout
                </button> ;
        const rightNav = (
            <section className="right-nav">
                <ul>
                    <li className="icon-li">
                        <i class="fas fa-user fa-2x"></i>
                        <div className="user-dropdown">
                            <ul>
                                <li>
                                    {button}
                                </li>
                            </ul>                           
                        </div>
                    </li>
                </ul>
                {/* <button className="logout" 
                    onClick={logOut}>
                    Logout
                </button>                           */}
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