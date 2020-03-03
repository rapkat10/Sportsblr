import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logOut } = this.props;
        const display = currentUser ? (
            <div>
                <h3>Welcome {currentUser.username}!</h3>
                <button className="logout" onClick={logOut}>Logout</button>
            </div>
        ) : (
                <>
                    <Link className="get-started" to="/signup">Get Started</Link>
                    <br/>
                    <br />
                    <br />
                    <Link className="log-in" to="/login">Log In</Link>
                </>
            );
    
        return (
            <div>
                <nav className="nav-home"> 
                    <Link to="/">
                        <h1 className="sportsblr">Sportsblr</h1>
                    </Link>
                    <ul className="ul-links">{display}</ul>
                </nav>
            </div>
        )
    }
}

export default Greeting;
