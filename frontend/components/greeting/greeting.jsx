import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;
        const display = <>
            <img className="backgroundImage" src={window.snowboardURL} />
            <h1 className="sportsblr">Sportsblr</h1>
            <Link className="get-started" to="/signup">Get Started</Link>
            <br/>
            <br />
            <br />
            <Link className="log-in" to="/login">Log In</Link>
        </>
    
        return (
            <div className="splash-div">
                <div className="nav-container">
                    <NavbarContainer />
                </div>
                <nav className="nav-home">                  
                    <ul>{display}</ul>
                </nav>
            </div>
        )
    }
}

export default Greeting;
