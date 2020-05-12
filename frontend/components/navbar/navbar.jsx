import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleIconClick = this.handleIconClick.bind(this);
        this.username;
    }

    handleIconClick() {
        const value = this.state.clicked ? false : true;
        this.setState({ clicked: value });
    }

    render() {

        const { currentUser, logOut } = this.props;
        const loggedin = currentUser ? "main-nav nav-loggedin" : "";
        let liked_posts;
        if (currentUser) {
            liked_posts = currentUser.liked_posts.length;
            this.username = currentUser.username;
        }
        const button = <span className="logout-dropdown-button"
            onClick={logOut}> Log out
        </span>;

        const dropdown = <>
            <div className="user-dropdown-div">
                <div className="user-dropdown--div">
                    <li className="account-dropdown"><span>ACCOUNT</span></li>
                    <li className="logout-dropdown-li">{button}</li>
                </div>
                <Link to="/likes">
                    <div className="dropdown-likes-section">
                        <li className="likes-dropdown">
                            <i className="fas fa-heart likes-heart"></i>Likes
                        </li>

                        <li className="likes-count">
                            {liked_posts}
                        </li>
                    </div>
                </Link>
            </div>
        </>;

        const wholepage = <div onClick={this.handleIconClick} className="click-it"></div>;

        const rightNav = (
            <>
                <ul className="about-links">
                    <li title="linkedIn">
                        <a href="https://www.linkedin.com/in/rapkat-amin-33b82b1a4/"
                            target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li title="GitHub">
                        <a href="https://github.com/rapkat10" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>

                <ul className="explore">
                    <li title="Explore">
                        <Link to="/explore">
                            <i className="fas fa-compass"></i>
                        </Link>
                    </li>
                </ul>

                <ul className="icon-list">
                    <li title="Dashboard">
                        <Link to="/">
                            <i className="fas fa-home fa-lg"></i>
                        </Link>
                    </li>
                    <li title={this.username} className="icon-li">
                        <i onClick={this.handleIconClick} 
                            className="logout-icon-fa fas fa-user fa-lg">
                        </i>
                    </li>
                    {this.state.clicked ? dropdown : <></>}
                </ul>
                
            </>
        );
        
        const flexLogo = currentUser ? "flex-logo" : "logo-splash";
        const mainNav = (
            <div className={loggedin}>
                <div className="flex-box-nav">
                    <div className={flexLogo}>
                        <Link to="/"><strong className="logo">S</strong></Link>
                    </div>
                    <div className="flex-icon">
                        {currentUser ? rightNav 
                        : <>
                            <ul className="about-links-session-form-page">
                                <li title="linkedIn">
                                    <a href="https://www.linkedin.com/in/rapkat-amin-33b82b1a4/"
                                        target="_blank">
                                        <i className="fab fa-linkedin fa-2x"></i>
                                    </a>
                                </li>
                                <li title="GitHub">
                                    <a href="https://github.com/rapkat10" target="_blank">
                                        <i className="fab fa-github fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </>}
                    </div>
                </div>
            </div>
        );

        return (
            <>
                {this.state.clicked ? wholepage : <></>}
                {mainNav}
            </>
        )
    }
}

export default Navbar;