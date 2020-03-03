import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {

        const { currentUser, logOut } = this.props;

        const leftNav = (
            <section className="left-nav">
                <Link to="/">
                    <strong className="logo">S</strong>
                </Link>
                <input 
                    className="search-box"
                    type="text"
                    placeholder="Search Sportsblr"
                />
            </section>
        )

        const rightNav = (
            <section className="right-nav">
                <button className="logout" 
                    onClick={logOut}>
                    Logout
                </button>                          
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