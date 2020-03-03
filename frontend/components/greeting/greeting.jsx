import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logOut } = this.props;
        const display = currentUser ? (
            <div>
                <h3 className="welcome">Welcome {currentUser.username}!</h3>
                {/* <button className="logout" onClick={logOut}>Logout</button> */}
            </div>
        ) : (
                <>
                    <Link to="/">
                        <h1 className="sportsblr">Sportsblr</h1>
                    </Link>
                    <Link className="get-started" to="/signup">Get Started</Link>
                    <br/>
                    <br />
                    <br />
                    <Link className="log-in" to="/login">Log In</Link>
                </>
            );
    
        return (
            <div>
                <div className="nav-container">
                    <NavbarContainer />
                </div>
                <img className="backgroundImage" src={window.snowboardURL} />
                <nav className="nav-home"> 
                    
                    <ul>{display}</ul>
                </nav>
            </div>
        )
    }
}

export default Greeting;
