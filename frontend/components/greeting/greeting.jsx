import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;
        const display = currentUser ? (
            <div>
                {/* <img className="backgroundImage" src={window.fcb} /> */}
                <h3 className="welcome">Welcome {currentUser.username}! from greeting</h3>
            </div>
        ) : (
                <>
                    <img className="backgroundImage" src={window.snowboardURL} />
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
                <nav className="nav-home">                  
                    <ul>{display}</ul>
                </nav>
                <h1>Greeting</h1>
            </div>
        )
    }
}

export default Greeting;
